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
        <meta property="og:description" content="We develop robust softwares, apps and web applications" />
        <meta name="description" content="We develop robust softwares, apps and web applications" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Webiggle Digital Agency | We develop robust softwares" />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://webiggle.com" />
        <link rel="canonical" href="https://webiggle.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="webiggle" /> 
        <meta name="twitter:title" content="Webiggle Digital Agency | We develop robust softwares" /> 
        <meta name="twitter:description" content="We develop robust softwares, apps and web applications" /> 
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
          <div className="flex items-center space-x-2">
            <a target="_blank" href="https://github.com/sahilofficial671">
              <svg role="img" viewBox="0 0 24 24" className="w-6 h-6 text-gray-600 hover:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Webiggle Github</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
            </a>
            <a href="mailto:info@webiggle.com">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-gray-600 hover:text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </footer>
        <NextScript />
      </body>
    </Html>
  )
}