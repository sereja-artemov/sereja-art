import { useEffect, useRef } from 'react';
// import s from './SkillItem.module.scss'

export default function Cursor() {

    const delay = 15;

    const dot = useRef<HTMLDivElement>(null);
    const dotOutline = useRef<HTMLDivElement>(null);

    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(false);

    const centerDisplayX = window.innerWidth / 2;
    const centerDisplayY = window.innerHeight / 2;

    const getCursorPosition = () => {
        if (localStorage.getItem('cursorPosition')) {
            return JSON.parse(localStorage.getItem('cursorPosition') || '{}');
        } else {
            return { x: centerDisplayX, y: centerDisplayY }
        }
    }
    const { x: cursorX, y: cursorY } = getCursorPosition();

    const endX = useRef(cursorX);
    const endY = useRef(cursorY);
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
            dot.current.style.top = endY.current + 'px';
            dot.current.style.left = endX.current + 'px';
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
        <div className="cursor-dot-outline" ref={dotOutline}></div>
        <div className="cursor-dot" ref={dot}></div>
    </>
);
};
