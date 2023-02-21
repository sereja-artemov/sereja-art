import s from './PostLayout.module.scss';
import getLocaleDate from "@/lib/getLocaleDate";
import {AiOutlineCalendar, AiOutlineFieldTime, AiOutlineRead} from "react-icons/ai";
import getWordEnding from "@/lib/getWordEnding";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";
import {useState} from "react";
import handler from "@/pages/api/hello";
import {lockScroll, removeScrollLock} from "@/utils/utils";

function PostLayout({post, children}) {
  const [isTodActive, setIsTodActive] = useState(false);
  const window = useWindowSize();

  const handleTodShow = () => {
    setIsTodActive(!isTodActive);
    !isTodActive ? lockScroll() : removeScrollLock();
  }

  return (
    <section className={`${s.postLayout} container-fluid`}>
      { post.tableOfContents.length !== 0 &&
        <>
        <div className={`${isTodActive ? s.todActive : ''} ${s.tableOfContents} container-fluid`}>
          <input className={s.inputSearchTitle} type="search" placeholder="Найти" />
          <h3 className={s.tocTitle}>Содержание</h3>
          <div className={s.tocLinkWrapper}>
            { post.tableOfContents.map((item, index: string) => {

              if (item.level >= 1 && window.width > 768) {
                return <Link className={s.todLink} style={{marginLeft: (item.level * 15) + "px", fontSize: 1 - Number(`0.${item.level}`) + "em",}} key={item.heading + index} href={`#${item.transliteratedHeading}`}>{item.heading}</Link>
              } else if (window.width < 768) {
                return <Link className={s.todLink} style={{marginLeft: (item.level * 15) + "px", fontSize: 1.4 - Number(`0.${item.level}`) + "em",}} key={item.heading + index} href={`#${item.transliteratedHeading}`}>{item.heading}</Link>
              }
              return <Link className={s.todLink} style={{marginLeft: (item.level * 15) + "px"}} key={item.heading + index} href={`#${item.transliteratedHeading}`}>{item.heading}</Link>
            }) }
          </div>
        </div>
          <button onClick={handleTodShow} className={`btn ${s.tableOfContentsBtn}`}>{ isTodActive ? 'Закрыть' : 'Открыть содержание' }</button>
        </>
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
