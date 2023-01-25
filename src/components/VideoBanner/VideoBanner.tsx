import React from 'react';
import s from '../VideoBanner/VideoBanner.module.scss';
import posterImage from '../../images/poster-image.jpg';

export default function VideoBanner() {
    return (
        <div className={`${s.wrapper} container block-mb`}>
            <video className={s.video}
                   preload="none"
                   loop
                   autoPlay
                   muted
                   poster={posterImage}
                   // controls={false}
            >
                <source src={"/video/banner-video.mp4"} type="video/mp4" />
            </video>
            <button className={s.resumeBtn}>Резюме</button>
        </div>
    );
}
