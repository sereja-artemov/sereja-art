import path from 'path';
import { readFileSync } from "fs";
import { sync } from 'glob';
import matter from 'gray-matter';
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import readTime from "reading-time";
import rehypePrettyCode from "rehype-pretty-code";

export default class MDXContent {
  POST_PATH: string;

  constructor(folderName: string) {
    /* .replace(/\\/g, '/') меняем палочки для windows */
    this.POST_PATH = path.join(process.cwd(), folderName).replace(/\\/g, '/');
  }

  /* Получаем все slug из каталога */
  getSlugs() {
    const paths = sync(`${this.POST_PATH}/*.mdx`);
    return paths.map((path) => {
      const parts = path.split("/");
      const fileName = parts[parts.length - 1];
      const [slug, _ext] = fileName.split(".");
      return slug;
    });
  }

  /* Функция возвращает front matter */
  getFrontMatter(slug: string) {
    const postPath = path.join(this.POST_PATH, `${slug}.mdx`);
    /* Возвращаем содержимое файла */
    const source = readFileSync(postPath);
    const { content, data } = matter(source);
    const readingTime = readTime(content, { wordsPerMinute: 200 });

    if (data.published) {
      return {
        slug,
        readingTime,
        excerpt: data.excerpt ?? "",
        title: data.title ?? slug,
        date: (data.date ?? new Date()).toString(),
        stringDate: data.stringDate ?? "",
        keywords: data.keywords ?? "",
        image: data.image ?? "",
      };
    }
  }

  /* Получаем post по значению slug (это пост с контентом и front matter)  */
  async getPostFromSlug(slug: string, force = false) {
    const postPath = path.join(this.POST_PATH, `${slug}.mdx`);
    const source = readFileSync(postPath);
    const {content, data} = matter(source);
    if (!data.published && !force) return {post: null};

    // получаем front matter
    const frontMatter = this.getFrontMatter(slug);

    /* настройка темы блоков с кодом */
    const prettyCodeOptions = {
      theme: "one-dark-pro",
      onVisitLine(node) {
        // Prevent lines from collapsing in `display: grid` mode, and
        // allow empty lines to be copy/pasted
        if (node.children.length === 0) {
          node.children = [{type: "text", value: " "}];
        }
      },
      // Feel free to add classNames that suit your docs
      onVisitHighlightedLine(node) {
        node.properties.className.push("highlighted");
      },
      onVisitHighlightedWord(node) {
        node.properties.className = ["word"];
      },
    }

    /* обрабатываем markdown файл */
    const mdxSource = await serialize(content, {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behaviour: "wrap" }],
          [rehypePrettyCode, prettyCodeOptions],
        ],
      },
    });
    return {
      post: {
        content: mdxSource,
        tableOfContents: this.getTableOfContents(content),
        meta: frontMatter,
      },
    };
  }

  /* Получаем все записи
  - Находим все slugs
  - мапим каждый slug и получаем его front matter
  - сортируем записи по дате
  - возвращаем массив с записями
*/
  getAllPosts() {
    const posts = this.getSlugs()
      .map((slug) => {
        return this.getFrontMatter(slug, false);
      })
      .filter((post) => post != null || post != undefined) // Оставляем только опубликованные записи
      .sort((a, b) => {
        if (new Date(a.date) > new Date(b.date)) return -1;
        if (new Date(a.date) < new Date(b.date)) return 1;
        return 0;
      });

    return posts;
  }

  /* Генерируем навигацию по заголовкам
  - используя регулярные выражения, получаем заголовки h2-h6
  - затем создаем иерархию заголовков, убираем "#", и возвращаем в виде массива
*/
  getTableOfContents(markdown: string) {
    const regXHeader = /#{2,6}.+/g;
    const headingArray = markdown.match(regXHeader)
      ? markdown.match(regXHeader)
      : [];
    return headingArray.map((heading) => {
      return {
        level: heading.split("#").length - 1 - 2, // мы начинаем с h2, поэтому мы вычитаем 2, а 1 - это дополнительный текст заголовка
        heading: heading.replace(/#{2,6}/, "").trim(),
      };
    });
  }

}


