import s from './ProjectCardItemSlider.module.scss';
import React, {useState} from 'react';
import Image from "next/image";
import { project } from "@/data/projectsData";

interface ProjectCardProps {
  data: project,
}

const ProjectCardItemSlider: React.FC<ProjectCardProps> = ({data}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`${s.card} keen-slider__slide`}>
      <div className={s.videoWrapper}>
        {isLoading && <p style={{top: '50%'}}>загрузка... загрузка... загрузка... загрузка...</p>}
        <Image fill={true} src={data.image} alt={`${data.name} картинка проекта`}
               onLoadingComplete={() => setIsLoading(false)} priority/>
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

export default ProjectCardItemSlider;
