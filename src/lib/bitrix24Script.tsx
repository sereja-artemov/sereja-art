import Script from 'next/script'

export default function B24FormButton() {
  return (
    <Script id="show-form" strategy="afterInteractive" data-b24-form="click/3/lrf7dc" data-skip-moving="true">
      {`(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b17818108/crm/form/loader_3.js');`}
    </Script>
  )
}
