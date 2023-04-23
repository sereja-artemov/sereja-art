import {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="ru">
      <Head/>
      <body>
      <Main/>
      <NextScript/>
      {/* Чат Битрикс24 Открытые линии */}
      <Script id="show-banner" strategy="lazyOnload">
        {`(function (w, d, u) {
            var s = d.createElement('script');
            s.async = true;
            s.src = u + '?' + ((Date.now() / 60000) | 0);
            var h = d.getElementsByTagName('script')[0];
            h.parentNode.insertBefore(s, h);
           })(window,
              document,
              'https://cdn-ru.bitrix24.ru/b17818108/crm/site_button/loader_1_xrfang.js');`
        }
      </Script>
      </body>
    </Html>
  )
}
