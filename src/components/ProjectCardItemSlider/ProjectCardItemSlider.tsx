import s from './ProjectCardItemSlider.module.scss';
import React, {useState} from 'react';
import Image from "next/image";
import Link from "next/link";
import {BsGithub} from "react-icons/bs";
import {MdWeb} from "react-icons/md";
import { AiOutlineCalendar } from 'react-icons/ai';
import { ProjectType } from '@/lib/types';
import SliderImageSkeleton from '@/components/skeletons/SliderImageSkeleton';

const ProjectCardItemSlider = ({data}: {data: ProjectType}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`${s.card} keen-slider__slide`}>
      <div className={s.videoWrapper}>
        { isLoading && <SliderImageSkeleton /> }
        <Image fill={true} src={data.previewImage || data.image} alt={`${data.name} картинка проекта`}
               onLoadingComplete={() => setIsLoading(true)} placeholder="blur"
               blurDataURL="https://sereja-art.ru/upload/image-empty.jpg" />
      </div>
      <div className={s.info}>
        <div className={s.techInfo}>
          <span className={s.publicationDate}>
            <AiOutlineCalendar className={s.icon} />
            {data.year + ' год'}
          </span>
        </div>
        <h2 className={s.title}>{data.name}</h2>
          <p className={s.description}>{data.description}</p>
          <div className={s.tools}>
            { data.tools.map((item, index) => (
              <p key={index}>{item}</p>
            ) ) }
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
