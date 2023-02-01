import React from 'react';
import s from '../VideoBanner/VideoBanner.module.scss';

export default function VideoBanner() {
  return (
    <div className={`${s.wrapper} container block-mb`}>
      <video className={s.video}
             loop
             autoPlay
             muted
             poster={'/banner-video-poster.jpg'}
        // controls={false}
      >
        <source src={"/video/banner-video.mp4"} type="video/mp4"/>
      </video>
      <button className={s.resumeBtn}>Резюме</button>
    </div>
  );
}
