import s from './AboutPage.module.scss';
import Image from 'next/image';
import Skills from '@/components/Skills/Skills';
import avatarPhoto from '../../images/about-photo.png';

const AboutPage = () => {

  return (
    <section className={`${s.about} container`}>
      <div className={`${s.aboutTextWrapper} block-mb`}>
        <div className={s.imageWrapper}>
          <Image className={s.avatarImage} src={avatarPhoto} alt='Сергей Артемов - веб-разработчик' />
        </div>
        <div className={s.aboutBlock}>
          <h1 className={'block-title'}>Обо мне</h1>
          <p className={s.description}>
            👋 Меня зовут Сергей Артемов, я frontend-разработчик.
            Профессионально занимаюсь разработкой и сопровождением сайтов. Провожу маркетинговое исследование, создаю дизайн, верстаю и программирую.

          </p>
          <p className={s.description}>
            Мне нравится использовать React.js или Next.js для создания сайтов и функциональных веб-приложений. Также работаю с 1С-Битрикс и Tilda.

          </p>

          <p className={s.description}>
            Наилучшим образом представлю вашу компанию в интернете и заставлю сайт работать.
          </p>

          <p className={s.description}>
            Люблю кататься на 🚲 велосипеде и готовить 🍕 пиццу.
          </p>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default AboutPage;
