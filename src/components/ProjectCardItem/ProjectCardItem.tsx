import {project} from "@/data/projectsData";
import s from './ProjectCardItem.module.scss';
import Image from "next/image";
import React, {useState} from "react";

interface ProjectCardProps {
  data: project,
}

const ProjectCardItem = ({data}:ProjectCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={s.card}>
      <div className={s.imgWrapper}>
        <div className={s.image}>
          {isLoading && <p style={{top: '50%'}}>загрузка... загрузка... загрузка... загрузка...</p>}
          <Image fill={true} src={data.image} alt={`${data.name} картинка проекта`}
                 onLoadingComplete={() => setIsLoading(false)} priority/>
        </div>
        {/*<div className={s.overlay}></div>*/}
      </div>
      <div className={s.info}>
        <h2 className={s.title}>{data.name}</h2>
        <p className={s.description}>{data.description}</p>
        <div className={s.tools}>
          { data.tools.map(item => <p>{item}</p>) }
        </div>
      </div>
    </div>

  );
};

export default ProjectCardItem;
