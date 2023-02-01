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
    <Link href="#" className={s.articleLink}>
      <article className={s.article}>
        <div className={s.imageWrapper}>
          <Image className={s.image} src={image} alt={`${title} картинка`} fill={true} placeholder={"blur"} />
        </div>
        <div className={s.contentWrapper}>
          <div className={s.content}>
            <h3 className={s.title}>{title}</h3>
            <p className={s.description}>{description}</p>
          </div>
          <div className={s.contentBottom}>
            <span className={s.publicationDate}>{date.toLocaleDateString('en-GB')}</span>
            <span className={s.readingTime}>{time}</span>
          </div>
        </div>
      </article>
    </Link>

  )
}

export default BlogItem;
