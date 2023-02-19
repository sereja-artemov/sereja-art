import s from './PostLayout.module.scss';
import getLocaleDate from "@/lib/getLocaleDate";
import {AiOutlineCalendar, AiOutlineFieldTime, AiOutlineRead} from "react-icons/ai";
import getWordEnding from "@/lib/getWordEnding";
import Link from "next/link";

function PostLayout({post, children}) {

  return (
    <section className={`${s.postLayout} container-fluid`}>
      {
        post.tableOfContents.length !== 0 &&
        <div className={`${s.tableOfContents} container-fluid`}>
          <input className={s.inputSearchTitle} type="search" placeholder="Найти" />
          <h3 className={s.tocTitle}>Содержание</h3>
          <div className={s.tocLinkWrapper}>
            { post.tableOfContents.map((item, index: string) => {
              console.log(1 - Number(`0.${item.level}`))
              if (item.level >= 1) {
                return <Link style={{marginLeft: (item.level * 15) + "px", fontSize: 1 - Number(`0.${item.level}`) + "em",}} key={item.heading + index} href={`#${item.transliteratedHeading}`}>{item.heading}</Link>
              }
              return <Link style={{marginLeft: (item.level * 15) + "px"}} key={item.heading + index} href={`#${item.transliteratedHeading}`}>{item.heading}</Link>
            }) }
          </div>


          <button className={`btn ${s.tableOfContentsBtn}`}>Открыть содержание</button>
        </div>
      }
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
