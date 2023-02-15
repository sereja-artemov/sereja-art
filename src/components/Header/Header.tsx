import s from './Header.module.scss';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {activeLink} from "@/utils/utils";
import React, {useEffect, useRef, useState} from "react";
import { BsMoonStars, BsSun, BsSunFill } from 'react-icons/bs';

import {useTheme} from "@/context/darkModeContext";

// type HeaderProps = {
//   setIsOverlay: (a: boolean) => void,
// }

const Header: React.FC = () => {
  const {theme, currentTheme, setDarkTheme, setLightTheme} = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  //
  // useEffect(() => {
  //   lockScroll();
  // }, [isMenuOpen])

  function showMenu() {
    setIsMenuOpen(true);
    // setIsOverlay(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
    // setIsOverlay(false);
  }

  function toggleShowMenu() {
    // isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
    if (isMenuOpen) {

      setIsMenuOpen(false);
      // setIsOverlay(false);
    } else {
      setIsMenuOpen(true);
      // setIsOverlay(true);
    }
  }

  // function lockScroll() {
  //   const root = document.getElementsByTagName("html")[0];
  //   const body = document.getElementsByTagName("body")[0];
  //   const header = document.getElementsByTagName("header")[0];
  //   if (isMenuOpen) {
  //     root.classList.add("lock-scroll");
  //     body.style.marginRight = '7px';
  //     header.style.paddingRight = '72px';
  //   } else {
  //     root.classList.remove("lock-scroll");
  //     body.style.marginRight = '0';
  //     header.style.paddingRight = '65px';
  //   }
  // }

  function closeMobileMenu() {
    window.innerWidth <= 767.98 && closeMenu();
  }

  useEffect(() => {

    // Sticky меню
    window.addEventListener('scroll', activateSticky);
    return () => {
      window.removeEventListener('scroll', activateSticky);
    };
  }, []);

  const activateSticky = () => {
    const scrollTop = window.scrollY;
    if (headerRef.current) {
      scrollTop >= 87
        ? headerRef.current.classList.add(`${s.isSticky}`)
        : headerRef.current.classList.remove(`${s.isSticky}`);

      if (scrollTop >= 87) {
        headerRef.current.style.backdropFilter = "blur(7px)";
        headerRef.current.style.borderBottom = "1px solid var(--border-color)";
        headerRef.current.style.boxShadow = "0 4px 10px rgb(0 0 0 / 10%)";
      } else {
        headerRef.current.style.backdropFilter = "none";
        headerRef.current.style.borderBottom = "none";
        headerRef.current.style.boxShadow = "none";
      }
    }
  };
  const router = useRouter();

  const toggleTheme = () => {
    currentTheme === theme.lightTheme ? setDarkTheme() : setLightTheme();
  }

  return (
    <header ref={headerRef} className={`${s.header} container-fluid`}>
      <Link href="/" className={s.logo}>
        <svg width="51" height="32" viewBox="0 0 51 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.0062 27.1124L0.830256 27.4792L1.15369 27.7261C2.45115 28.7162 4.18356 29.4999 6.32645 30.0933C8.47438 30.6881 10.6564 30.9857 12.8713 30.9857C14.562 30.9857 16.1028 30.8256 17.4885 30.5H17.7778H23.7521H24.0797L24.2105 30.1997L26.7025 24.4772H40.082L42.5266 30.1965L42.6563 30.5H42.9864H49.0578H49.8331L49.5133 29.7938L36.9333 2.01093L36.8003 1.71717H36.4778H30.4064H30.0844L29.9512 2.01027L23.2868 16.672C22.3483 15.7571 21.2625 15.0866 20.0324 14.6658C18.6778 14.1706 16.9245 13.68 14.7793 13.1925L14.7793 13.1924L14.7707 13.1906C12.6158 12.7403 11.0571 12.2966 10.0692 11.8659C9.63492 11.6543 9.33814 11.398 9.14799 11.1097C8.95805 10.8218 8.85417 10.4712 8.85417 10.0372C8.85417 9.25684 9.20242 8.62913 9.98455 8.12633L9.98464 8.12646L9.99492 8.11948C10.7794 7.58715 12.0357 7.28289 13.8427 7.28289C16.7724 7.28289 19.2816 7.97484 21.3911 9.33982L21.8845 9.65906L22.1206 9.12093L24.2092 4.36093L24.382 3.967L24.0183 3.73729C22.7319 2.92482 21.2047 2.32339 19.4461 1.92479C17.6913 1.49474 15.8879 1.28003 14.037 1.28003C11.5925 1.28003 9.43834 1.64328 7.58562 2.38436C5.73541 3.12445 4.27863 4.17885 3.24275 5.56003L3.24269 5.55999L3.23794 5.56655C2.23242 6.95348 1.73417 8.56368 1.73417 10.3772C1.73417 12.3421 2.24389 13.961 3.3164 15.1766C4.34072 16.3375 5.5592 17.1799 6.96809 17.6953L6.97172 17.6966C8.35834 18.1918 10.1449 18.6827 12.3249 19.1708L12.3249 19.171L12.3375 19.1735C14.4646 19.5924 15.9836 20.0361 16.9278 20.493L16.9278 20.493L16.9334 20.4956C17.3899 20.7096 17.7003 20.9689 17.898 21.2593C18.0936 21.5466 18.1999 21.895 18.1999 22.3257C18.1999 23.0665 17.8585 23.6802 17.0715 24.1867C16.3196 24.6592 15.0456 24.9343 13.1627 24.9343C11.4644 24.9343 9.79775 24.6828 8.16122 24.1793C6.52134 23.6747 5.15099 23.0019 4.03989 22.1686L3.55251 21.8031L3.28906 22.3524L1.0062 27.1124ZM29.1761 18.8143L33.4178 9.01321L37.6595 18.8143H29.1761Z"
            fill="none" stroke="var(--font-color)"/>
        </svg>
      </Link>

      {isMenuOpen &&
        <nav onMouseLeave={closeMenu} className={s.nav}>
          <ul className={s.list}>
            <li className={s.listItem}>
              <Link onClick={closeMobileMenu} href="/" className={`${s.link} ${activeLink('/', router.pathname)}`}>
                <span data-text="Главная">Главная</span>
              </Link>
            </li>
            <li className={s.listItem}>
              <Link onClick={closeMobileMenu} href="/about"
                    className={`${s.link} ${activeLink('/about', router.pathname)}`}>
                <span data-text="Обо&nbsp;мне">Обо мне</span>
              </Link>
            </li>
            <li className={s.listItem}>
              <Link onClick={closeMobileMenu} href="#" className={`${s.link} ${activeLink('#', router.pathname)}`}>
                <span data-text="Портфолио">Портфолио</span>
              </Link>
            </li>
            <li className={s.listItem}>
              <Link onClick={closeMobileMenu} href="#" className={`${s.link} ${activeLink('#', router.pathname)}`}>
                <span data-text="Услуги">Услуги</span>
              </Link>
            </li>
            <li className={s.listItem}>
              <Link onClick={closeMobileMenu} href="/blogs" className={`${s.link} ${activeLink('#', router.pathname)}`}>
                <span data-text="Блог">Блог</span>
              </Link>
            </li>
            <li className={s.listItem}>
              <Link onClick={closeMobileMenu} href="#" className={`${s.link} ${activeLink('#', router.pathname)}`}>
                <span data-text="Контакты">Контакты</span>
              </Link>
            </li>
          </ul>
        </nav>}
      <button onClick={toggleTheme} className={s.toggleThemeButton}>

        { currentTheme === theme.lightTheme ? <BsSun className={s.sunIcon} /> : <BsMoonStars className={s.sunIcon} /> }
      </button>
      <button onMouseEnter={showMenu} onClick={toggleShowMenu} className={`${s.menuBtn} ${isMenuOpen && s.menuActive}`}>
        <span className={s.menuBtnText}>меню</span>
      </button>
    </header>
  );
}

export default Header;
