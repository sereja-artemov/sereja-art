import s from './ProjectCard.module.scss';
import React from 'react';

interface ProjectCardProps {
    name: string,
    description?: string,
    date: number | string | Date,
    cost?: number,
    link: string,
    video: string,
    image: string,
}

const ProjectCard: React.FC<ProjectCardProps> = (data) => {

    return (
        <div className={`${s.card} keen-slider__slide`}>
            <div className={s.videoWrapper}>
                <video className={s.video}
                       loop
                       autoPlay
                       muted
                       poster={data.image.src}
                    // controls={false}
                >
                    <source src={data.video} type="video/mp4" />
                </video>
            </div>
            <div className={s.projectAbout}>
                <h3>{data.name}</h3>
                <p className={s.projectDescription}>{data.description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
