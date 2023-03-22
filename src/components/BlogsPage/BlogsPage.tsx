import React from 'react';
import BlogItem from "@/components/BlogItem/BlogItem";
import s from './BlogPage.module.scss';

function BlogsPage({ filteredBlogs }) {
  return (
    <section className={`${s.blog} container-fluid section-padding`}>
      { filteredBlogs.length !== 0 ? (
        filteredBlogs.map((article, index) => {
          return <BlogItem article={article} key={index}  />
        })
      ) : (
        <div className={s.notFound}>
          <p>Ничего не найдено</p>
        </div>
      ) }
    </section>
  );
}

export default BlogsPage;
