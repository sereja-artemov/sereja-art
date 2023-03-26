import * as React from 'react';
import s from './Blog.module.scss';
import BlogItem from '@/components/BlogItem/BlogItem';

const BlogBlock: React.FC = ({ blogs }) => {
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
