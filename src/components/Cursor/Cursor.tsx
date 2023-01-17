import { useEffect, useRef } from 'react';
import s from './Cursor.module.scss'

export default function Cursor() {

    const delay = 18;

    const dot = useRef<HTMLDivElement>(null);
    const dotOutline = useRef<HTMLDivElement>(null);

    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(false);

    const endX = useRef(window.innerWidth / 2);
    const endY = useRef(window.innerHeight / 2);
    const _x = useRef(0);
    const _y = useRef(0);

    const requestRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousedown', mouseOverEvent);
        document.addEventListener('mouseup', mouseOutEvent);
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseenter', mouseEnterEvent);
        document.addEventListener('mouseleave', mouseLeaveEvent);

        animateDotOutline();

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

        endX.current = e.pageX;
        endY.current = e.pageY;
// @ts-ignore
        dot.current.style.top = endY.current + 'px';
        // @ts-ignore
        dot.current.style.left = endX.current + 'px';
    };

    const animateDotOutline = () => {
        _x.current += (endX.current - _x.current) / delay;
        _y.current += (endY.current - _y.current) / delay;
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
