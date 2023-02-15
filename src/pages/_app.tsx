import '@/styles/utils/normalize.css'
import '@/styles/_variables.scss'
import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import { Raleway, Roboto } from "@next/font/google";
import Layout from "@/components/Layout/Layout";
import {DarkModeProvider} from "@/context/darkModeContext";
import { IconContext } from 'react-icons';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import "nprogress/nprogress.css";
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

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

export default function App({Component, pageProps}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

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
              }
            `}</style>

      <DarkModeProvider>
        <IconContext.Provider value={{ color: 'var(--icons-color)' }}>
          <Layout>
            { getLayout(<Component {...pageProps} />) }
          </Layout>
        </ IconContext.Provider>
      </DarkModeProvider>
    </>
  )
}
