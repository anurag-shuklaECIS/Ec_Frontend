import Head from 'next/head';
import { tw } from 'twind';
import Navigation from '../../components/navigation/index';

const Page = ({ children }) => (
  <div>
    <Head>
    <meta name="description" content="EC Infosolutions is a custom software development company that offers software solutions &amp; digital transformation services across the world."/>
      <link rel="icon" href="./ecLogo2.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,300&family=Roboto:wght@300;500&display=swap"
        rel="stylesheet"
      />
   
    </Head>
    <div className={tw(`min-h-screen flex flex-col`)}>
      <Navigation />
      {children}
    </div>
  </div>
);

export default Page;
