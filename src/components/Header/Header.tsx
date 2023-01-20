import s from './Header.module.scss';
import Link from 'next/link';

export default function Header() {
    return (
        <header className={s.header}>
            <div className="container-fluid">
                <a href="" className="logo"><img src="" alt="" className="logo-image"/></a>
                <nav className={s.nav}>
                    <ul className={s.list}>
                        <h1 className={s.headerH1}>я заголовок</h1>
                        <li className={s.listItem}><Link href="/" className={s.link}>Главная</Link></li>
                        <li className={s.listItem}><Link href="/about" className={s.link}>Обо мне</Link></li>
                        <li className={s.listItem}><Link href="#" className={s.link}>Портфолио</Link></li>
                        <li className={s.listItem}><Link href="#" className={s.link}>Услуги</Link></li>
                        <li className={s.listItem}><Link href="#" className={s.link}>Блог</Link></li>
                        <li className={s.listItem}><Link href="#" className={s.link}>Контакты</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
