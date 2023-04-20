import {useEffect, useRef} from 'react';
import { element } from 'prop-types';
import s from './Cursor.module.scss';
import { useRouter } from 'next/router';

export default function Cursor() {

  const { pathname } = useRouter();

  const delay = 10; //скорость следования follower 'cursor-dot'
  const followerOpacity = 1;

  const dot = useRef<HTMLDivElement>(null);
  const dotOutline = useRef<HTMLDivElement>(null);

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  //координаты центра дисплея
  const centerDisplayX = window.innerWidth / 2;
  const centerDisplayY = window.innerHeight / 2;

  //коллекция со всеми ссылками на странице
  const linkArr = document.getElementsByTagName('a');
  //коллекция со всеми кнопками на странице
  const buttonArr = document.getElementsByTagName('button');
  console.log(buttonArr);
  //получаем координаты курсора из localStorage, если их нет, то из центра дисплея
  const getCursorPosition = () => {
    if (localStorage.getItem('cursorPosition')) {
      return JSON.parse(localStorage.getItem('cursorPosition') || '{}');
    } else {
      return {x: centerDisplayX, y: centerDisplayY}
    }
  }

  const {x: cursorX, y: cursorY} = getCursorPosition();

  const posX = useRef(cursorX);
  const posY = useRef(cursorY);
  const _x = useRef(cursorX);
  const _y = useRef(cursorY);

  const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', mouseOverEvent);
    document.addEventListener('mouseup', mouseOutEvent);
    document.addEventListener('mousemove', mouseMoveEvent);
    document.addEventListener('mouseenter', mouseEnterEvent);
    document.addEventListener('mouseleave', mouseLeaveEvent);

    animateDotOutline();

    if (dot.current) {
      dot.current.style.top = posY.current + 'px';
      dot.current.style.left = posX.current + 'px';
      dot.current.style.zIndex = '999';
    }
    if (dotOutline.current) {
      dotOutline.current.style.zIndex = '999';
    }

    return () => {
      document.removeEventListener('mousedown', mouseOverEvent);
      document.removeEventListener('mouseup', mouseOutEvent);
      document.removeEventListener('mousemove', mouseMoveEvent);
      document.removeEventListener('mouseenter', mouseEnterEvent);
      document.removeEventListener('mouseleave', mouseLeaveEvent);

      // @ts-ignore
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  useEffect(() => {
    Array.from(linkArr).forEach((element) => {
      element.addEventListener('mouseenter', mouseEnterOn);
      element.addEventListener('mouseleave', mouseLeaveOn);
    })
    Array.from(buttonArr).forEach((element) => {
      element.addEventListener('mouseenter', mouseEnterOn);
      element.addEventListener('mouseleave', mouseLeaveOn);
    })

    return () => {
      Array.from(linkArr).forEach((element) => {
        element.removeEventListener('mouseenter', mouseEnterOn);
        element.addEventListener('mouseleave', mouseLeaveOn);
      })
      Array.from(buttonArr).forEach((element) => {
        element.removeEventListener('mouseenter', mouseEnterOn);
        element.addEventListener('mouseleave', mouseLeaveOn);
      })
    }
  }, [pathname]);

  // эффект при наведении на элементы
  const mouseEnterOn = () => {
    if (dotOutline.current) {
      dotOutline.current.style.background = 'none';
      dotOutline.current.style.border = '1px solid var(--cursor-follower-color)';
    }
  }
  const mouseLeaveOn = () => {
    if (dotOutline.current) {
      dotOutline.current.style.background = 'rgb(103 103 171 / 40%)';
      dotOutline.current.style.border = 'none';
    }
  }

  const saveCursorPositionInLS = (x: number, y: number) => {
    localStorage.setItem('cursorPosition', JSON.stringify({x, y}));
  }

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      // @ts-ignore
      dot.current.style.opacity = 1;
      // @ts-ignore
      dotOutline.current.style.opacity = 1;
    } else {
      // @ts-ignore
      dot.current.style.opacity = 0;
      // @ts-ignore
      dotOutline.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      // @ts-ignore
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
      // @ts-ignore
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
    } else {
      // @ts-ignore
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
      // @ts-ignore
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = (e: { pageX: number; pageY: number; }) => {
    cursorVisible.current = true;
    toggleCursorVisibility();
    saveCursorPositionInLS(e.pageX, e.pageY);

    posX.current = e.pageX;
    posY.current = e.pageY;
    // @ts-ignore
    dot.current.style.top = posY.current + 'px';
    // @ts-ignore
    dot.current.style.left = posX.current + 'px';
  };

  const animateDotOutline = () => {
    _x.current += (posX.current - _x.current) / delay;
    _y.current += (posY.current - _y.current) / delay;
    // @ts-ignore
    dotOutline.current.style.top = _y.current + 'px';
    // @ts-ignore
    dotOutline.current.style.left = _x.current + 'px';

    // @ts-ignore
    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <>
      <div className={s.cursorDotOutline} ref={dotOutline}></div>
      <div className={s.cursorDot} ref={dot}></div>
    </>
  );
};
