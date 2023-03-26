import s from './AboutPage.module.scss';
import Image from 'next/image';
import Skills from '@/components/Skills/Skills';
import avatarImage from '../../images/about-image.png';

const AboutPage = () => {

  return (
    <section className={`${s.about} container`}>
      <div className={s.aboutTextWrapper}>
        <div className={s.imageWrapper}>
          <Image className={s.avatarImage} src={avatarImage} alt='Сергей Артемов - веб-разработчик' />
        </div>
        <div className={s.aboutBlock}>
          <h1 className={'block-title'}>Обо мне</h1>
          <p className={s.description}>
            Меня зовут Артемов Сергей, я frontend-разработчик.
            Моя главная задача и цель на данный момент - это достижение вершин в веб-разработке, для этого я постоянно
            учусь и каждый день узнаю что-то новое.
          </p>
          <p className={s.description}>
            Моя жизнь - это работа, на неё я трачу практически все своё время. Моя жизнь - это также музыка, без которой я
            просто не могу представить своё существование, это путешествия, которые позволяют разгрузить голову и дарят
            чувство свободы, легкости и беззаботности, это спорт благодаря которому, чувствуешь себя в хорошем настроении,
            полным энергии и сил.
          </p>
          <p className={s.description}>
            Главное в жизни заниматься любимым делом и тогда это дело будет выполнено максимально
            качественно и в срок.
          </p>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default AboutPage;
