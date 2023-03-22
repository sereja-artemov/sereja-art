import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { SiCss3, SiPython, SiGnubash, SiHtml5, SiReact, SiTypescript } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";
import s from './CodeTitle.module.scss';

export default function CodeTitle({ title, lang }) {
  let Icon;
  switch (lang) {
    case "html":
      Icon = SiHtml5;
      break;
    case "css":
      Icon = SiCss3;
      break;
    case "js":
      Icon = IoLogoJavascript;
      break;
    case "bash":
      Icon = SiGnubash;
      break;
    case "py":
      Icon = SiPython;
      break;
    case "json":
      Icon = VscJson;
      break;
    case "jsx":
      Icon = SiReact;
      break;
    case "tsx":
      Icon = SiReact;
      break;
    case "react":
      Icon = SiReact;
      break;
    case "ts":
      Icon = SiTypescript;
      break;
    default:
      Icon = BsFileEarmarkCodeFill;
      break;
  }
  return (

        <div className={s.codeTitle}>
          <Icon className={s.icon} />
          <p className={s.titleText}>{title}</p>
        </div>

  );
}
