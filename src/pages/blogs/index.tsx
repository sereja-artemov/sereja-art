import MDXContent from "@/lib/MDXContent";
import {useEffect, useState} from "react";
import BlogItem from "@/components/BlogItem/BlogItem";
import BlogsPage from "@/components/BlogsPage/BlogsPage";
import PageTopBlock from "@/components/PageTopBlock/PageTopBlock";
import SEO from "@/components/SEO/SEO";

function Blogs({blogs}) {
  const [filteredBlogs, setFilteredBlogs] = useState([...blogs]);

  return (
    <>
      <SEO title='Блог веб-разработчика'
           description="Веду блог по frontend-разработке и не только. Публикую материалы по html-верстке, веб-дизайну, программированию на JS (React, NextJS) и всем, что связано с веб-разработкой и созданием сайтов."/>
      <PageTopBlock pageTitle="Блог">
        Количество записей в моем блоге: {blogs.length}.
      </PageTopBlock>
      <BlogsPage filteredBlogs={filteredBlogs}/>
    </>
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
