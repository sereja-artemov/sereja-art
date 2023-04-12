import { ReactNode, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header/Header';
import Footer from '../Footer/Footer';
import ScrollProgressBar from '@/components/ScrollProgressBar/ScrollProgressBar';

const Cursor = dynamic(() => import('../Cursor/Cursor'), { ssr: false });
const ScrollTopButton = dynamic(() => import('../../components/ScrollTopButton/ScrollTopButton'), { ssr: false });

type LayoutProps = {
  children?: ReactNode
}

export default function Layout({ children }: LayoutProps) {

  return (
    <>
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
