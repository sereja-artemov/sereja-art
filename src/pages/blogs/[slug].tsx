import MDXContent from '@/lib/MDXContent';

export default function Post({post, error}) {
  console.log(post)


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
