import s from './ContactsPage.module.scss';

const ContactsPage = () => {
  return (
    <section className={`${s.contacts} container section-padding`}>
      <h1 className={s.title}>Контакты</h1>
      <p className={`${s.textBlock} ${s.description}`}>Если вы заинтересованы в сотрудничестве или вам нужна помощь с проектом, пожалуйста, напишите мне на email.</p>
      <a href='mailto:artemov46@gmail.com' className={`${s.textBlock} ${s.contactsItem}`}>artemov46@gmail.com</a>
      <p className={`${s.textBlock}`}>или в любом мессенджере</p>
      <div className={`${s.textBlock}`}>
        <span className={s.contactsItem}>+7 951 333 99 23</span>
        <div className={s.messengerItems}>
          <span>— Telegram</span>
          <span>— WhatsApp</span>
        </div>
      </div>
      <p className={`${s.textBlock}`}>я в соцсетях</p>
      <div className={s.messengerItems}>
        <span className={s.contactsItem}>ВКонтакте</span>
      </div>
    </section>
  );
};

export default ContactsPage;
