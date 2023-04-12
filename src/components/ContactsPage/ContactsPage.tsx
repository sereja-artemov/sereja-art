import s from './ContactsPage.module.scss';
import Link from 'next/link';

const ContactsPage = () => {
  return (
    <section className={`${s.contacts} container section-padding`}>
     <h1 className='page-title'>
        Контакты
      </h1>
      <p className={`${s.textBlock} ${s.description}`}>Если вы заинтересованы в сотрудничестве или вам нужна помощь <br/> с проектом, пожалуйста, напишите мне на email</p>
      <a href='mailto:artemov46@gmail.com' className={`${s.textBlock} ${s.contactsItem}`}>artemov46@gmail.com</a>
      <p className={`${s.textBlock}`}>или в любом мессенджере</p>
      <div className={`${s.textBlock}`}>
        <span className={`${s.contactsItem} ${s.messengerItems}`}>
          <Link href='https://t.me/sereja_art' target='_blank'>Telegram</Link>
          <Link href='https://wa.me/79513339923' target='_blank'>WhatsApp</Link>
        </span>
      </div>
      <p className={`${s.textBlock}`}>я в соцсетях</p>
      <div className={s.messengerItems}>
        <Link href='https://vk.com/sereja_art' target='_blank' className={s.contactsItem}>ВКонтакте</Link>
      </div>
    </section>
  );
};

export default ContactsPage;
