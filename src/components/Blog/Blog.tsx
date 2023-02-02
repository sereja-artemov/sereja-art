import * as React from 'react'
import s from './Blog.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import {blogData} from "@/data/blogData";
import BlogItem from "@/components/BlogItem/BlogItem";

const Blog: React.FC = () => {

  return (
    <section className={`${s.blog} container block-mb`}>
      <h1 className={`block-title`}>Блог</h1>
      <div className={s.articleWrapper}>
        {blogData.map((article, index) => {
          return <BlogItem key={index}
                           title={article.title}
                           description={article.description}
                           image={article.image}
                           link={article.link}
                           date={article.date}
                           time={article.time}
          />
        })}
      </div>

    </section>
  )
}

export default Blog;
