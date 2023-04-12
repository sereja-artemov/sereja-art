import * as React from 'react'
import s from './SkillItem.module.scss';
import {SiAdobephotoshop, SiCss3, SiFigma, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiSass} from "react-icons/si";
import { popUp } from '@/utils/framerMotionVariants';
import { motion } from 'framer-motion';
import { BsWordpress } from 'react-icons/bs';
import { AiOutlineSmallDash } from 'react-icons/ai';

type SkillsItemProps = {
  name: string,
};

const SkillsItem: React.FC<SkillsItemProps> = ({name}) => {
  const Icon = chooseIcon(name);

  return (
    <motion.div
      variants={popUp} className={s.skill}>
        <Icon className={s.image} />
        <p className={s.name}>{name}</p>
    </motion.div>
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
    case "WordPress":
      Icon = BsWordpress;
      break;
    default:
      Icon = AiOutlineSmallDash;
      break;
  }
  return Icon;
}

export default SkillsItem;
