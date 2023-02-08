import s from './ScrollTopButton.module.scss';
import {useState} from "react";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  if (window.scrollY > 300) {
    setIsVisible(true);
  } else {
    setIsVisible(false);
  }

  return (
    isVisible &&
    <button className={s.button}>

    </button>
  );
};

export default ScrollTopButton;
