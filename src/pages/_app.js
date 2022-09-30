import { NextSeo } from 'next-seo';
import React, { useEffect } from 'react';
import { setup } from 'twind';
import '../styles/404.css';
import '../styles/blog.css';
import '../styles/blogReadMore.css';
import '../styles/clientSuccess.css';
import '../styles/contactUs.css';
import '../styles/customerAppDev.css';
import '../styles/eCommerce.css';
import '../styles/freeVocal.css';
import '../styles/global.css';
import '../styles/googleCloud.css';
import '../styles/index.css';
import '../styles/labCore.css';
import '../styles/leaderShip.css';
import '../styles/loader.css';
import '../styles/pricing.css';
import '../styles/pytDev.css';
import '../styles/registration.css';
import '../styles/teamService.css';
import twindConfig from '../twind.config';
import Script from 'next/script';


if (typeof window !== `undefined`) {
  setup(twindConfig);
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'http://js.hs-scripts.com/9316836.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <NextSeo title="EC infosolutions" />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-44857748-3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-44857748-3');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
