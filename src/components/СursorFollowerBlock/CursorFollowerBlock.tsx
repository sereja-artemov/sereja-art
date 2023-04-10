import React, {useEffect, useRef, useState} from 'react';
import s from './CursorFollowerBlock.module.scss';
import Image from "next/image";

const CursorFollowerBlock = (imageSrc: string) => {

  const blockRef = useRef<HTMLDivElement>(null);
  const [isBlockVisible, setIsBlockVisible] = useState(true);

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveEvent);

    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
    }
  }, [])

  const mouseMoveEvent = (e: { pageX: number; pageY: number; }) => {
    const cursorPosX = e.pageX;
    const cursorPosY = e.pageY;

    // @ts-ignore
    blockRef.current.style.top = cursorPosY + 'px';
    // @ts-ignore
    blockRef.current.style.left = cursorPosX + 'px';

  };

  return (
    <div ref={blockRef} className={s.block}>
      <Image src={''} alt={'image follower block'} />
    </div>
  );
};

export default CursorFollowerBlock;
