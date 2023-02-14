import MDXContent from "@/lib/MDXContent";

function Blogs({ blogs }) {
  console.log(blogs)
  return (
    <div>

    </div>
  );
}

export async function getStaticProps() {

  const blogs = new MDXContent('src/posts').getAllPosts();

  return {
    props: { blogs },
  }
}

export default Blogs;
