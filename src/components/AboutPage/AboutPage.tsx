import PageTopBlock from '../PageTopBlock/PageTopBlock';
import s from './AboutPage.module.scss';

const AboutPage = () => {

  return (
    <section className={`container-fluid`}>
      <PageTopBlock pageTitle="Обо мне">
        Меня зовут Сережа
      </PageTopBlock>

    </section>
  );
};

export default AboutPage;
