import s from './ProjectCardItem.module.scss';
import Image from 'next/image';
import React, { useState } from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import { AiOutlineCalendar } from 'react-icons/ai';
import { ProjectType } from '@/lib/types';

const ProjectCardItem = ({ data }: { data: ProjectType }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <article className={s.project}>
      <div className={s.imageWrapper}>
        <Image width={910} height={512} src={data.previewImage || data.image} alt={`${data.name} картинка проекта`}
               onLoadingComplete={() => setIsLoading(false)} priority />
      </div>
      <div className={s.info}>
        <div className={s.techInfo}>
          <span className={s.publicationDate}>
            <AiOutlineCalendar className={s.icon} />
            {data.year + ' год'}
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
              <FiExternalLink className={`${s.icon} ${s.buildIcon}`} title='build иконка' />
            </Link>
          }
        </div>
      </div>
    </article>

  );
};

export default ProjectCardItem;
