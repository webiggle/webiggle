/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/jsx-no-target-blank */
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Webiggle Digital Agency | We develop robust softwares</title>
        <meta name="description" content="We develop small to enterprise level software and web applications. We have experties in e-commerce store, business websites, mobile apps and much more." />
      </Head>
      <nav className='w-full max-w-4xl px-4 mx-auto sm:px-6 md:px-8 lg:px-16 pt-4 md:pt-8'>
        <div className='flex items-center justify-between -ml-2'>
          <a href="/" className='inline-flex items-center'>
            <Image 
              src="/logo.png"
              alt="Webiggle"
              width="42"
              height="42"
            />
          </a>
        </div>
      </nav>
      <div className="w-full max-w-4xl px-4 mx-auto sm:px-6 md:px-8 lg:px-16 pt-8 md:pt-12">
        <div className="container pb-10">
          <div className='pb-4 md:pb-8 lg:pb-10'>
            <h1 className="text-4xl md:text-5xl pb-4 md:pb-8 font-brand font-semibold">
              Welcome to Webiggle!
            </h1>

            <p className='font-sans text-xl sm:text-2xl text-gray-700'>
              We develop <span className='font-semibold text-cyan-700'>robust</span> web software, apps &amp; much more. We also contribute to <span className='font-semibold text-cyan-700'>OSS</span>.
            </p>
          </div>
          <div className='pb-4 md:pb-8'>
            <h3 className='text-xl pb-4 font-brand font-medium uppercase tracking-wider font-sans font-normal'>Our Products</h3>

            <a href="https://store.webiggle.com/?utm_source=webiggle&utm_medium=our_products" className="block bg-white px-3 sm:px-7 py-5 border-gray-200 border shadow-sm rounded hover:bg-gray-50 hover:border-gray-300" target="_blank">
              <div className="flex justify-between pb-3">
                <div className="text-lg font-semibold">Webiggle Store</div>
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
              </div>
              <div>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    <li className="flex items-baseline">
                        <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        Best OpenCart custom extension / modules / theme development
                    </li>
                    <li className="flex items-baseline">
                        <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        OpenCart third party integration, payment gateway setup
                    </li>
                    <li className="flex items-baseline">
                        <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        OpenCart Annual and Monthly Support Plans
                    </li>
                    <li className="flex items-baseline">
                        <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                        OpenCart migration to Cloud like AWS, Digital Ocean, etc.
                    </li>
                </ul>
              </div>
            </a>

          </div>
        </div>
      </div>
    </>
  )
}
