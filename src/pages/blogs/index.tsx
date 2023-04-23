import MDXContent from "@/lib/MDXContent";
import { useState } from "react";
import BlogsPage from "@/components/BlogsPage/BlogsPage";
import { FrontMatter } from '@/lib/types';

function Blogs({blogs}: { blogs: FrontMatter[] }) {
  const [filteredBlogs, setFilteredBlogs] = useState([...blogs]);
  return (
    <BlogsPage filteredBlogs={filteredBlogs}/>
  );
}

export async function getStaticProps() {
  /* Получаем только gray matter */
  const blogs = new MDXContent('src/posts').getAllPosts();

  return {
    props: {blogs},
  }
}

export default Blogs;
