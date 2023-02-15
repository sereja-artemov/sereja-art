import MDXContent from '@/lib/MDXContent';
import ArticleLayout from "@/layout/ArticleLayout";
import {ReactElement} from "react";
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'

const Post: NextPageWithLayout = ({ post, error }) => {
  console.log(post)
  return (
    <p>hello world</p>
  )
}

Post.getLayout = function getLayout(page: ReactElement) {
  return (
    <ArticleLayout>
      {page}
    </ArticleLayout>
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
