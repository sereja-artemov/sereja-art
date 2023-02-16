import MDXContent from '@/lib/MDXContent';
import PageNotFound from "@/pages/404";
import {MDXRemote} from "next-mdx-remote";
import MDXComponents from "@/components/MDXComponents";
import PostLayout from "@/components/Layout/PostLayout/PostLayout";

const Post = ({ post, error }) => {

  if (error) return <PageNotFound />;

  return (
    <PostLayout post={post} >
      <MDXRemote
        {...post.source}
        frontmatter={post.meta}
        components={MDXComponents}
      />
    </PostLayout>
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
