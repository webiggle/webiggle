/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable react/jsx-no-target-blank */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Webiggle Digital Agency | We develop robust softwares" />
        <meta property="og:description" content="We develop small to enterprise level software and web applications. We have experties in e-commerce store, business websites, mobile apps and much more." />
        <meta name="description" content="We develop small to enterprise level software and web applications. We have experties in e-commerce store, business websites, mobile apps and much more." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Webiggle Digital Agency | We develop robust softwares" />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://webiggle.com" />
        <link rel="canonical" href="https://webiggle.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="webiggle" /> 
        <meta name="twitter:title" content="Webiggle Digital Agency | We develop robust softwares" /> 
        <meta name="twitter:description" content="We develop small to enterprise level software and web applications. We have experties in e-commerce store, business websites, mobile apps and much more." /> 
        <meta name="twitter:image" content="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo+Narrow:wght@400;500;600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZDGH5Y6Z26"></script>
        <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZDGH5Y6Z26', {
              page_path: window.location.pathname,
            });
          `}}
          />
      </Head>
      <body className='min-h-screen antialiased text-gray-800 font-body bg-gradient-to-b from-gray-50 to-blue-50 relative'>
        <Main />

        <footer className='w-full max-w-4xl px-4 mx-auto sm:px-6 md:px-8 lg:px-16 pt-6'>
          <p className='font-sans text-lg text-gray-700 pb-4'>For any query &amp; information contact us by <a href="mailto:info@webiggle.com" target="_blank" className='font-semibold text-cyan-700'>Email</a>.</p>
        </footer>
        <NextScript />
      </body>
    </Html>
  )
}