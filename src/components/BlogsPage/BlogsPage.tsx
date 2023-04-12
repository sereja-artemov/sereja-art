import React from 'react';
import BlogItem from "@/components/BlogItem/BlogItem";
import s from './BlogPage.module.scss';
import SEO from "@/components/SEO/SEO";
import { FrontMatter } from '@/lib/types';

function BlogsPage({ filteredBlogs }: {filteredBlogs: FrontMatter[]}) {
  return (
    <>
      <SEO title='Блог веб-разработчика'
           description="Веду блог по frontend-разработке и не только. Публикую материалы по html-верстке, веб-дизайну, программированию на JS (React, NextJS) и всем, что связано с веб-разработкой и созданием сайтов."/>
      <section className={`${s.blog} container-fluid`}>
        <h1 className='page-title'>Блог</h1>
        {/*<p className={s.pageDescription}>Количество записей в моем блоге: {filteredBlogs.length}.</p>*/}
        <div className={s.articleWrapper}>
          { filteredBlogs.length !== 0 ? (
            filteredBlogs.map((article, index) => {
              return <BlogItem article={article} key={index}  />

            })
          ) : (
            <div className={s.notFound}>
              <p>Ничего не найдено</p>
            </div>
          ) }
        </div>

      </section>
    </>
  );
}

export default BlogsPage;
