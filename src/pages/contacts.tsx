import SEO from "@/components/SEO/SEO";
import ContactsPage from '@/components/ContactsPage/ContactsPage';

export default function Contacts () {

  return (
    <>
     <SEO title='Контакты' description='Контакты frontend-разработчика Артемова Сергея.' />
     <ContactsPage />
    </>
  )
}
