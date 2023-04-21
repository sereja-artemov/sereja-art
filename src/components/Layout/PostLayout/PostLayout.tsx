import s from './PostLayout.module.scss';
import getLocaleDate from "@/lib/getLocaleDate";
import {AiOutlineCalendar, AiOutlineFieldTime, AiOutlineRead} from "react-icons/ai";
import getWordEnding from "@/lib/getWordEnding";
import Link from "next/link";
import useWindowSize from "@/hooks/useWindowSize";
import {useEffect, useRef, useState} from "react";
import {lockScroll, removeScrollLock} from "@/utils/utils";
import useScrollPercentage from "@/hooks/useScrollPercentage";
import { PostType } from '@/lib/types';

function PostLayout({post, children}: {post: PostType; children: JSX.Element;}) {
  const [isTodActive, setIsTodActive] = useState(false);
  const [filteredTod, setFilteredTod] = useState(post.tableOfContents);
  const [searchValue, setSearchValue] = useState('');
  const window = useWindowSize();
  const scrollPercentage = useScrollPercentage();


  useEffect(() => {
    const filteredArray = post.tableOfContents.filter(item => item.heading.toLowerCase().includes(searchValue.toLowerCase()));
    setFilteredTod(filteredArray);
  }, [searchValue]);

  function handleSearchInput(event: any) {
    setSearchValue(event.target.value);
  }

  function closeTod() {
    setIsTodActive(false);
    !isTodActive ? lockScroll() : removeScrollLock();
  }

  const handleTodShow = () => {
    setIsTodActive(!isTodActive);
    !isTodActive ? lockScroll() : removeScrollLock();
  }

  return (
    <section className={`${s.postLayout} container-fluid`}>
      { post.tableOfContents.length !== 0 &&
        <>
          { scrollPercentage < 95 &&
            <>
              <div className={`${isTodActive ? s.todActive : ''} ${s.tableOfContents} container-fluid`}>
                <input onChange={handleSearchInput} className={s.inputSearchTitle} type="search" placeholder="Найти" />
                <h3 className={s.tocTitle}>Содержание</h3>
                <div className={s.tocLinkWrapper}>
                  { filteredTod.map((item, index: number) => {

                    if (item.level >= 1 && window.width > 768) {
                      return <Link className={s.todLink} style={{marginLeft: (item.level * 15) + "px", fontSize: 1 - Number(`0.${item.level}`) + "em",}} key={item.heading + index} href={`#${item.transliteratedHeading}`}>{item.heading}</Link>
                    } else if (window.width < 768) {
                      return <Link onClick={closeTod} className={s.todLink} style={{marginLeft: (item.level * 15) + "px", fontSize: 1.4 - Number(`0.${item.level}`) + "em",}} key={item.heading + index} href={`#${item.transliteratedHeading}`}>{item.heading}</Link>
                    }
                    return <Link className={s.todLink} style={{marginLeft: (item.level * 15) + "px"}} key={item.heading + index} href={`#${item.transliteratedHeading}`}>{item.heading}</Link>
                  }) }
                </div>
                { filteredTod.length === 0 && <p>Ничего не найдено</p> }
              </div>
              <button onClick={handleTodShow} className={`btn ${s.tableOfContentsBtn}`}>{ isTodActive ? 'Закрыть' : 'Открыть содержание' }</button>
            </>

          }
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
        <div className={s.btnWrapper}>
          <Link href='/blogs' className={`btn btn--light ${s.backBtn}`}>Назад в блог</Link>
        </div>
      </article>

    </section>
  );
}

export default PostLayout;
