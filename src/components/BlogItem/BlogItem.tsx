import * as React from 'react'
import s from './BlogItem.module.scss';
import Image from "next/image";
import Link from "next/link";

const BlogItem: React.FC = () => {

    return (
        <Link className={s.articleLink} href={"#"}>
            <article className={`${s.article}`}>
                <Image src={''} alt={'image'}/>
                <div className={s.contentWrapper}>
                    <h3>Кодекс городского самурая</h3>
                    <p>
                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem
                        Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а
                        также...
                    </p>
                    <div className={s.contentBottom}>
                        <span className={s.publicationDate}>25 декабря 2023</span>
                        <span className={s.readingTime}>5 минут</span>
                    </div>
                </div>
            </article>
        </Link>

    )
}

export default BlogItem;
