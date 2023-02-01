import * as React from 'react'
import s from './Blog.module.scss';

const Blog: React.FC = () => {

    return (
        <section className={`${s.blog} container block-mb`}>
            <h1 className={`block-title`}>Блог</h1>

        </section>
    )
}

export default Blog;
