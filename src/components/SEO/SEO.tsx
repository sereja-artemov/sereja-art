import Head from "next/head";
import useWindowLocation from "@/hooks/useWindowLocation";

interface SEOProps {
  title?: string,
  description?: string,
  keywords?: string,
  previewImage?: string,
}

const SEO = ({ title, description, keywords, previewImage }:SEOProps) => {
  const { currentURL } = useWindowLocation();

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content={description || "sereja-art"} />
      <title>{`${title || ""} | sereja-art`}</title>
      <meta name="theme-color" content="#000" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons/icon-192x192.png"></link>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="author" content="Sergey Artemov"></meta>
      <meta name="robots" content="index,follow" />
      <meta
        name="keywords"
        content={`${keywords || ""} sereja-art, sergey artemov, сайт портфолио веб-разработчкика, веб разработка, frontend разработчик, портфолио веб разработчика`}
      />

      {/* Og */}
      <meta property="og:title" content={`${title || ""} sereja-art`} />
      <meta property="og:description" content={description || "sereja-art"} />
      <meta property="og:site_name" content="sereja-art" />
      <meta property="og:url" content={currentURL} key="ogurl" />
      <meta property="og:image" content={previewImage || ""} />

    </Head>
  );
};

export default SEO;
