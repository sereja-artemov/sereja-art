import s from './ProjectCard.module.scss';
import React from 'react';

const ProjectCard = (data: object[]) => {
    return (
        <div className={`${s.card} keen-slider__slide`}>
            <video className={s.video}
                   loop
                   autoPlay
                   muted
                   poster={data.image}
                // controls={false}
            >
                <source src={data.video} type="video/mp4" />
            </video>
            <div className={s.projectAbout}>
                <h3>{data.name}</h3>
                <p className={s.projectDescription}>{data.description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
