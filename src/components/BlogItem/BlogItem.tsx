import * as React from 'react'
import s from './BlogItem.module.scss';
import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import {AiOutlineCalendar, AiOutlineFieldTime} from "react-icons/ai";
import getLocaleDate from "@/lib/getLocaleDate";

interface BlogItemProps {
  title: string,
  description: string,
  image: string | StaticImageData,
  link: string,
  date: number | string | Date | any,
  time: string,
}

const BlogItem: React.FC<BlogItemProps> = ({ article }) => {
  console.log(article.readingTime)
  return (
      <article className={s.article}>
        <div className={s.imageWrapper}>
          <Image width={635} height={400} className={s.image} src={article.image} fill={false} alt={`${article.title} картинка`} />
        </div>
        <div className={s.contentWrapper}>
          <div className={s.info}>
            <span className={s.publicationDate}>
              <AiOutlineCalendar className={s.icon} />
              {getLocaleDate('ru', article.date, 'short')}</span>
            <span className={s.readingTime}>
              <AiOutlineFieldTime className={s.icon} />
              {article.readingTime.textRU}</span>
          </div>
          <div className={s.content}>
            <Link className={s.articleLink} href={`blogs/${article.slug}`}>
              <h3 className={s.title}>{article.title}</h3>
            </Link>
            <p className={s.description}>{article.excerpt}</p>
          </div>
            <Link href={`blogs/${article.slug}`} className={`btn btn--second ${s.button}`}>Читать</Link>

        </div>
      </article>
  )
}

export default BlogItem;
