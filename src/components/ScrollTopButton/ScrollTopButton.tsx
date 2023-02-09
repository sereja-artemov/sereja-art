import s from './ScrollTopButton.module.scss';
import {useEffect, useState} from 'react';
import { IoIosArrowUp } from 'react-icons/io';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleShowButton);
    return () => window.removeEventListener('scroll', toggleShowButton);
  }, [])

  function toggleShowButton() {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      { isVisible &&
        <button onClick={scrollToTop} className={s.scrollButton}>
          <IoIosArrowUp className={s.arrowIcon} />
        </button>
      }
    </>
  );
};

export default ScrollTopButton;
