import s from './ProjectCard.module.scss';
import React, {useState} from 'react';
import Image from "next/image";

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

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`${s.card} keen-slider__slide`}>
      <div className={s.videoWrapper}>
        {isLoading && <p style={{top: '50%'}}>загрузка... загрузка... загрузка... загрузка...</p>}
        <Image fill={true} src={data.image} alt={`${data.name} картинка проекта`}
               onLoadingComplete={() => setIsLoading(false)} priority/>
        {/*<video className={s.video}*/}
        {/*       loop*/}
        {/*       autoPlay*/}
        {/*       muted*/}
        {/*       poster={data.image.src}*/}
        {/*    // controls={false}*/}
        {/*>*/}
        {/*    <source src={data.video} type="video/mp4" />*/}
        {/*</video>*/}
      </div>
      <div className={s.projectAbout}>
        <div className={s.foreground}>
          <h3>{data.name}</h3>
          <p className={s.projectDescription}>{data.description}</p>
        </div>
        <div className={s.blur}></div>
      </div>
    </div>
  );
};

export default ProjectCard;
