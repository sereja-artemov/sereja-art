import * as React from 'react'
import s from './SkillItem.module.scss';
import Image from "next/image";
import {SiAdobephotoshop, SiCss3, SiFigma, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiSass} from "react-icons/si";
import {skillsData} from "@/data/skillsData";

type SkillsItemProps = {
  name: string,
};

const SkillsItem: React.FC<SkillsItemProps> = ({name}) => {
  const Icon = chooseIcon(name);

  return (
    <div className={s.skill}>
        <Icon className={s.image} alt={`${name} логотип иконка`} priority />

        {/*<Image className={s.image} src={image} alt={`${name} логотип иконка`} priority />*/}
        <p className={s.name}>{name}</p>
    </div>
  )
}

/* To choose the Icon according to the Name */
function chooseIcon(title: string) {
  let Icon;
  switch (title) {
    case "JavaScript":
      Icon = SiJavascript;
      break;
    case "HTML":
      Icon = SiHtml5;
      break;
    case "CSS":
      Icon = SiCss3;
      break;
    case "SCSS":
      Icon = SiSass;
      break;
    case "React":
      Icon = SiReact;
      break;
    case "NextJS":
      Icon = SiNextdotjs;
      break;
    case "Figma":
      Icon = SiFigma;
      break;
    case "Photoshop":
      Icon = SiAdobephotoshop;
      break;
    default:
      break;
  }
  return Icon;
}

export default SkillsItem;
