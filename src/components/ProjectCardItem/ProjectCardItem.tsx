import { project } from '@/data/projectsData';
import s from './ProjectCardItem.module.scss';
import Image from 'next/image';
import React, { useState } from 'react';
import { MdWeb } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import { AiOutlineCalendar } from 'react-icons/ai';
import getLocaleDate from '@/lib/getLocaleDate';

interface ProjectCardProps {
  data: project,
}

const ProjectCardItem = ({ data }: ProjectCardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <article className={s.project}>
      <div className={s.imageWrapper}>
        <Image fill={true} src={data.image} alt={`${data.name} картинка проекта`}
               onLoadingComplete={() => setIsLoading(false)} priority/>
      </div>
      <div className={s.info}>
        <div className={s.techInfo}>
          <span className={s.publicationDate}>
            <AiOutlineCalendar className={s.icon} />
            {data.year}
          </span>
        </div>
        <h3 className={s.title}>{data.name}</h3>
        <p className={s.description}>{data.description}</p>
        <div className={s.tools}>
          {data.tools.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className={s.links}>
          {data.links.githubLink !== undefined &&
            <Link href={data.links.githubLink} target='_blank'>
              <BsGithub className={`${s.icon} ${s.githubIcon}`} title='github иконка' />
            </Link>
          }
          {data.links.buildLink !== undefined &&
            <Link href={data.links.buildLink} target='_blank'>
              <MdWeb className={`${s.icon} ${s.buildIcon}`} title='build иконка' />
            </Link>
          }
        </div>
      </div>
    </article>

  );
};

export default ProjectCardItem;
