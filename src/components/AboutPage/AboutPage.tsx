import s from './AboutPage.module.scss';
import Image from 'next/image';
import Skills from '@/components/Skills/Skills';
import avatarImage from '../../images/about-image.png';
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
            👋 Меня зовут Сергей Артемов, я frontend-разработчик и фрилансер.
            Профессионально занимаюсь разработкой и сопровождением сайтов. Провожу маркетинговое исследование, создаю дизайн, верстаю и программирую.

          </p>
          <p className={s.description}>
            Мне нравится использовать React.js или Next.js для создания сайтов и функциональных веб-приложений. Также работаю с 1С-Битрикс, Wordpress и Tilda.

          </p>
          <p className={s.description}>
            Люблю кататься на 🚲 велосипеде и готовить 🍕 пиццу.
          </p>
          {/*<p className={s.description}>*/}
          {/*  Так получилось, что я развивался сразу в нескольких направлениях: в программировании, верстке, дизайне, маркетинге.*/}
          {/*</p>*/}

        </div>
      </div>
      <Skills />
    {/*  <ul className={s.advantages}>*/}
    {/*    <h2 className={`block-title`}>Преимущества</h2>*/}
    {/*    <li>*/}
    {/*      <h3>Качество</h3>*/}
    {/*      <p className={s.description}>*/}
    {/*        Я не использую сомнительные шаблоны, поэтому мои сайты не содержат лишнего кода и легко продвигаются в интернете.*/}
    {/*      </p>*/}
    {/*    </li>*/}
    {/*    <li>*/}
    {/*    <h3>Профессиональный подход</h3>*/}
    {/*    <p className={s.description}>*/}
    {/*      Тяп-ляп - это не мой путь. Полностью погружаюсь в задачу и не беру больше двух проектов одновременно.*/}
    {/*    </p>*/}
    {/*  </li>*/}
    {/*  <li>*/}
    {/*    <h3>Работаю официально</h3>*/}
    {/*    <p className={s.description}>*/}
    {/*      Слышали истории, в которых разработчик взял деньги и исчез? Освобождаю вас от этих рисков, я работаю официально и выдаю чеки.*/}
    {/*    </p>*/}
    {/*  </li>*/}
    {/*  <li>*/}
    {/*    <h3>Стоимость</h3>*/}
    {/*    <p className={s.description}>*/}
    {/*      Цена ниже, чем у веб-студии, мне не надо платить аренду офиса и штатным сотрудникам*/}
    {/*    </p>*/}
    {/*  </li>*/}
    {/*  <li>*/}
    {/*    <h3>Вы видите за что платите</h3>*/}
    {/*    <p className={s.description}>*/}
    {/*      Оцениваю конкретный объем работы, присылаю подробную смету*/}
    {/*    </p>*/}
    {/*  </li>*/}
    {/*</ul>*/}
    </section>
  );
};

export default AboutPage;
