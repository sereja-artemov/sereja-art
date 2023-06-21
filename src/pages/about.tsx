import Head from 'next/head';
import SEO from '@/components/SEO/SEO';
import AboutPage from '@/components/AboutPage/AboutPage';

export default function About() {
  return (
    <>
      <SEO title='Веб-разработчик, дизайнер, маркетолог' />
      <AboutPage />
    </>
  );
}
