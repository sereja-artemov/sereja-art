import * as React from 'react'
import s from './SkillItem.module.scss';
import Image from "next/image";

type SkillsItemProps = {
  name: string,
  image: string,
};

const SkillsItem: React.FC<SkillsItemProps> = ({name, image}) => {

  return (
    <div className={s.skill}>
      <Image className={s.image} src={image} alt={`${name} логотип иконка`} priority />
      <p className={s.name}>{name}</p>
    </div>
  )
}

export default SkillsItem;
