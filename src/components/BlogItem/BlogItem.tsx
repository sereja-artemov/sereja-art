import * as React from 'react'
import s from './BlogItem.module.scss';
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface BlogItemProps {
  title: string,
  description: string,
  image: string | StaticImageData,
  link: string,
  date: number | string | Date | any,
  time: string,
}

const BlogItem: React.FC<BlogItemProps> = ({title, time, description, date, link, image}) => {

  return (
      <article className={s.article}>
        <div className={s.imageWrapper}>
          {/*<Image width={500} height={200} className={s.image} src={image} fill={false} alt={`${title} картинка`} />*/}
        </div>
        <div className={s.contentWrapper}>
          <div className={s.info}>
            <span className={s.publicationDate}>{date}</span>
            <span className={s.readingTime}>{time}</span>
          </div>
          <div className={s.content}>
            <Link className={s.articleLink} href={'#'}>
              <h3 className={s.title}>{title}</h3>
            </Link>
            <p className={s.description}>{description}</p>
          </div>
            <button className={`btn btn--second ${s.button}`}>Читать</button>

        </div>
      </article>
  )
}

export default BlogItem;
