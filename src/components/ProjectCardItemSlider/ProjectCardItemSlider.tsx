import s from './ProjectCardItemSlider.module.scss';
import React, {useState} from 'react';
import Image from "next/image";
import { project } from "@/data/projectsData";
import Link from "next/link";
import {BsGithub} from "react-icons/bs";
import {MdWeb} from "react-icons/md";

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
      {/*<div className={s.projectAbout}>*/}
      {/*  <div className={s.foreground}>*/}
      {/*    <h3>{data.name}</h3>*/}
      {/*    <p className={s.projectDescription}>{data.description}</p>*/}
      {/*  </div>*/}
      {/*  <div className={s.blur}></div>*/}
      {/*</div>*/}
      <div className={s.info}>
        <h2 className={s.title}>{data.name}</h2>
          <p className={s.description}>{data.description}</p>
          <div className={s.tools}>
            { data.tools.map(item => <p>{item}</p>) }
          </div>
        <div className={s.links}>
          { data.links.githubLink !== undefined &&
            <Link href={data.links.githubLink} target='_blank'>
              <BsGithub className={`${s.icon} ${s.githubIcon}`} title='github иконка' />
            </Link>
          }
          { data.links.buildLink !== undefined &&
            <Link href={data.links.buildLink} target='_blank'>
              <MdWeb className={`${s.icon} ${s.buildIcon}`} title='build иконка' />
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectCardItemSlider;
