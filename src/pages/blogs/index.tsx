import MDXContent from "@/lib/MDXContent";
import {useState} from "react";
import BlogItem from "@/components/BlogItem/BlogItem";

function Blogs({ blogs }) {
  const [filteredBlogs, setFilteredBlogs] = useState([...blogs]);
  console.log(filteredBlogs)
  return (
    <div>
      { filteredBlogs.map((article, index) => {
        return <BlogItem title={article.title} date={article.date} description={article.excerpt} image={article.image} key={`article.slug + ${index}`}  />
      }) }
    </div>
  );
}

export async function getStaticProps() {
  /* Получаем только gray matter */
  const blogs = new MDXContent('src/posts').getAllPosts();

  return {
    props: { blogs },
  }
}

export default Blogs;
