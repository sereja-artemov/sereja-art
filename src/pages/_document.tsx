import {Html, Head, Main, NextScript} from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="ru">
      <Head/>
      <body>
      <Main/>
      <NextScript/>
      <Script id="metrika-counter" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(94063322, "init", {
                defer: true,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
          });`
        }
      </Script>
      {/* Чат Битрикс24 Открытые линии */}
      <Script id="show-banner" strategy="afterInteractive">
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
