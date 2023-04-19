import Head from 'next/head';
import useWindowLocation from '@/hooks/useWindowLocation';

interface SEOProps {
  title?: string,
  description?: string,
  keywords?: string,
  previewImage?: string,
}

const SEO = ({ title, description, keywords, previewImage }: SEOProps) => {
  const { currentURL } = useWindowLocation();

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
      />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='description' content={description || 'sereja-art'} />
      <title>{`${title || ''} — sereja-art`}</title>
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />
      <link rel='manifest' href='/manifest.json' />
      <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
      <meta name='author' content='Sergey Artemov'></meta>
      <meta name='robots' content='index,follow' />
      <meta
        name='keywords'
        content={`${keywords || ''} sereja-art, sergey artemov, сайт портфолио веб-разработчкика, веб разработка, frontend разработчик, портфолио веб разработчика`}
      />

      {/* Og */}
      <meta property='og:title' content={`${title || ''} sereja-art`} />
      <meta property='og:description' content={description || 'sereja-art'} />
      <meta property='og:site_name' content='sereja-art' />
      <meta property='og:url' content={currentURL} key='ogurl' />
      <meta property='og:image' content={previewImage || ''} />

    </Head>
  );
};

export default SEO;
