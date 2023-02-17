import MDXContent from '@/lib/MDXContent';
import PageNotFound from "@/pages/404";
import {MDXRemote} from "next-mdx-remote";
import MDXComponents from "@/components/MDXComponents";
import PostLayout from "@/components/Layout/PostLayout/PostLayout";
import Link from 'next/link';
import { MDXProvider } from '@mdx-js/react'
import { transliterate } from "transliteration";

const Post = ({ post, error }) => {
  if (error) return <PageNotFound />;

  // кастомные MDX заголовки, id присваивает rehypeSlug из MDXContent
  const CustomH2 = ({ id, ...rest }) => {
    // транслитерируем id, т.к. в ссылках содержания мы используем транслитерированные якоря
    const transliteratedID = transliterate(id);

    if (transliteratedID) {
      return <h2 id={transliteratedID} {...rest} />;
    }
    return <h2 {...rest} />;
  };

  const components = {
    h2: CustomH2,
  };

  // this would also work in pages/_app.js
  // const Layout = ({ children }) => {
  //   return <MDXProvider components={components}>{children}
  // };


  return (
    <MDXProvider components={components}>
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
