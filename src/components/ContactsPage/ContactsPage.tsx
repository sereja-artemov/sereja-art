import s from "@/components/BlogsPage/BlogPage.module.scss";

const ContactsPage = () => {
  return (
    <section className={`${s.contacts} container section-padding`}>
      <h1 className={s.title}>Контакты</h1>
      Если вы заинтересованы в сотрудничестве или вам нужна помощь с проектом, пожалуйста, напишите мне на email:

      я люблю помогать

      artemov46@gmail.com
      или позвоните по телефону

      Viber
      WhatsApp
      +7 951 333 99 23
      я в соцсетях

      vk
      instagram

    </section>
  );
};

export default ContactsPage;
