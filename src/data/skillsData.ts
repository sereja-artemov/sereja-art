import jsIcon from "@/images/icons/js-icon.jpg";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiSass, SiFigma, SiAdobephotoshop } from 'react-icons/si';

interface skillsObj {
  name: string,
  image: string,
}

export const skillsData: skillsObj[] = [
  {
    name: 'JavaScript',
    image: jsIcon
  },
  {
    name: 'HTML',
    image: jsIcon
  },
  {
    name: 'CSS',
    image: jsIcon
  },
  {
    name: 'SCSS',
    image: jsIcon
  },
  {
    name: 'React',
    image: jsIcon
  },
  {
    name: 'NextJS',
    image: jsIcon
  },
  {
    name: 'Figma',
    image: jsIcon
  },
  {
    name: 'Photoshop',
    image: jsIcon
  },
];
