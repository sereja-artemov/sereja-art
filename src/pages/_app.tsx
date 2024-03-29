import '@/styles/utils/normalize.css'
import '@/styles/_variables.scss'
import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import { Raleway, Roboto } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import {DarkModeProvider} from "@/context/darkModeContext";
import { IconContext } from 'react-icons';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// @ts-ignore
import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import SEO from "@/components/SEO/SEO";
import { YandexMetrika } from '@/components/YandexMetrika/YandexMetrika';

const raleway = Raleway({
  style: ['normal'],
  subsets: ['cyrillic', 'latin'],
  fallback: ['open-sans', 'system-ui', 'arial']
});
const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'cyrillic'],
  fallback: ['open-sans', 'system-ui', 'arial']
});

/* Progressbar Configurations */
NProgress.configure({
  easing: "ease",
  speed: 500,
  showSpinner: false,
});

export default function App({Component, pageProps}: AppProps) {

  const router = useRouter();

  useEffect(() => {
    const start = () => NProgress.start();
    const end = () => NProgress.done();

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    }

  }, [router.events])


  return (
    <>
      <style jsx global>{`
              html {
                font-family: ${roboto.style.fontFamily};
              }

              h1, h2, h3, h4, h5, h6 {
                font-family: ${raleway.style.fontFamily};
                margin-bottom: 0.5em;
              }
            `}</style>

      <DarkModeProvider>
        <IconContext.Provider value={{ color: 'var(--icons-color)' }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ IconContext.Provider>
      </DarkModeProvider>
    </>
  )
}
