import MDXContent from '@/lib/MDXContent';
import PageNotFound from "@/pages/404";
import {MDXRemote} from "next-mdx-remote";
import MDXComponents from "@/components/MDXComponents";
import PostLayout from "@/components/Layout/PostLayout/PostLayout";
import Link from 'next/link';
import { MDXProvider } from '@mdx-js/react'
import { transliterate, slugify } from "transliteration";
import SEO from "@/components/SEO/SEO";
import "highlight.js/scss/atom-one-dark.scss";

const Post = ({ post, error }) => {
  if (error) return <PageNotFound />;
  // кастомные MDX заголовки, id присваивает rehypeSlug из MDXContent
  // кастомные MDX заголовки начало
  const CustomH1 = ({ id, ...rest }) => {
    // транслитерируем id, т.к. в ссылках содержания мы используем транслитерированные якоря
    const transliteratedID = transliterate(id);

    if (transliteratedID) {
      return <h1 id={transliteratedID} {...rest} />;
    }
    return <h1 {...rest} />;
  };
  const CustomH2 = ({ id, ...rest }) => {
    // транслитерируем id, т.к. в ссылках содержания мы используем транслитерированные якоря
    const transliteratedID = transliterate(id);

    if (transliteratedID) {
      return <h2 id={transliteratedID} {...rest} />;
    }
    return <h2 {...rest} />;
  };
  const CustomH3 = ({ id, ...rest }) => {
    // транслитерируем id, т.к. в ссылках содержания мы используем транслитерированные якоря
    const transliteratedID = transliterate(id);

    if (transliteratedID) {
      return <h3 id={transliteratedID} {...rest} />;
    }
    return <h3 {...rest} />;
  };
  const CustomH4 = ({ id, ...rest }) => {
    // транслитерируем id, т.к. в ссылках содержания мы используем транслитерированные якоря
    const transliteratedID = transliterate(id);

    if (transliteratedID) {
      return <h4 id={transliteratedID} {...rest} />;
    }
    return <h4 {...rest} />;
  };
  const CustomH5 = ({ id, ...rest }) => {
    // транслитерируем id, т.к. в ссылках содержания мы используем транслитерированные якоря
    const transliteratedID = transliterate(id);

    if (transliteratedID) {
      return <h5 id={transliteratedID} {...rest} />;
    }
    return <h5 {...rest} />;
  };
  const CustomH6 = ({ id, ...rest }) => {
    // транслитерируем id, т.к. в ссылках содержания мы используем транслитерированные якоря
    const transliteratedID = transliterate(id);

    if (transliteratedID) {
      return <h6 id={transliteratedID} {...rest} />;
    }
    return <h6 {...rest} />;
  };

  const components = {
    h1: CustomH1,
    h2: CustomH2,
    h3: CustomH3,
    h4: CustomH4,
    h5: CustomH5,
    h6: CustomH6,
  };
  // кастомные MDX заголовки конец

  // this would also work in pages/_app.js

  return (
    <MDXProvider components={components}>
      <SEO title={post.meta.title} description={post.meta.excerpt} keywords={post.meta.keywords} previewImage={post.meta.image} />
      <PostLayout post={post} >
        <MDXRemote
          {...post.source}
          frontmatter={post.meta}
          components={MDXComponents}
        />
      </PostLayout>
    </MDXProvider>
  )
}

/* Генерируем страницу для каждого slug */
export async function getStaticProps({ params }) {
  const { slug } = params;
  const { post } = await new MDXContent('src/posts').getPostFromSlug(slug);

  if (post != null) {
    return {
      props: {
        error: false,
        post: {
          meta: post.meta,
          source: post.content,
          tableOfContents: post.tableOfContents,
        },
      },
    };
  } else {
    return {
      props: {
        error: true,
        post: null,
      },
    };
  }
}

/* Генерируем все возможные пути для slug */
export async function getStaticPaths() {
  const paths = new MDXContent('src/posts')
    .getSlugs()
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
export default Post;
