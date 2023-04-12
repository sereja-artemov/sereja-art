import * as React from 'react';
import s from './Blog.module.scss';
import BlogItem from '@/components/BlogItem/BlogItem';
import { FrontMatter } from '@/lib/types';

const BlogBlock = ({ blogs }: { blogs: FrontMatter[] }) => {

  return (
    <section className={`${s.blog} container block-mb`}>
      <h1 className={`block-title`}>Блог</h1>
      <div className={s.articleWrapper}>
        {blogs.map((article, index) => {
          return <BlogItem key={index} article={article} />;
        })}
      </div>
    </section>
  );
};

export default BlogBlock;
