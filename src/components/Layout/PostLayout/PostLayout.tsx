import s from './PostLayout.module.scss';
import getLocaleDate from "@/lib/getLocaleDate";
import {AiOutlineCalendar, AiOutlineFieldTime, AiOutlineRead} from "react-icons/ai";
import getWordEnding from "@/lib/getWordEnding";
import Link from "next/link";
import { slugify } from 'transliteration';
import {stringToSlug} from "@/lib/stringToSlug";
import {useEffect} from "react";

function PostLayout({post, children}) {
  console.log(post)

  return (
    <section className={`${s.postLayout} container-fluid`}>
      <div className={s.tableOfContents}>
        { post.tableOfContents.map((item, index: string) => {
          return <Link key={index} href={`#${item.transliteratedHeading}`}>{item.heading}</Link>
        }) }
      </div>
      <article className={s.post}>
        <div className={s.topBlock}>
          <h1 className={s.title}>{post.meta.title}</h1>
          <div className={s.info}>
            <span className={s.date}>
              {<AiOutlineCalendar className={`${s.icon} ${s.iconCalendar}`} />}
              {getLocaleDate('ru',post.meta.date)}</span>
            <div className={s.readingInfo}>
              <span className={s.time}>
                {<AiOutlineFieldTime className={`${s.icon} ${s.iconTime}`} />}
                {post.meta.readingTime.textRU}
              </span>
              <span className={s.words}>
                {<AiOutlineRead className={`${s.icon} ${s.iconRead}`} />}
                {post.meta.readingTime.words}
                {getWordEnding(post.meta.readingTime.words, [' слово', ' слова', ' слов'])}</span>
            </div>
          </div>
        </div>
        {children}
      </article>
    </section>
  );
}

export default PostLayout;
