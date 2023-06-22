import { ReactNode, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header/Header';
import Footer from '../Footer/Footer';
import ScrollProgressBar from '@/components/ScrollProgressBar/ScrollProgressBar';
import { YandexMetrika } from '../YandexMetrika/YandexMetrika';
import SEO from '../SEO/SEO';

const Cursor = dynamic(() => import('../Cursor/Cursor'), { ssr: false });
const ScrollTopButton = dynamic(() => import('../../components/ScrollTopButton/ScrollTopButton'), { ssr: false });

type LayoutProps = {
  children?: ReactNode
}

export default function Layout({ children }: LayoutProps) {

  return (
    <>
      <SEO />
      <YandexMetrika />
      <Cursor />
      <Header />
      <main className='main-content-pt'>
        {children}
      </main>
      <Footer />
      <ScrollTopButton />
      <ScrollProgressBar />
    </>
  );
}
