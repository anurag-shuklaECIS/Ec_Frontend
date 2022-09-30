import { NextSeo } from 'next-seo';
import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import Page from '../components/page';
import PytDev from '../components/pytDev/pytDevPage.js';

export default function Home() {
  return (
    <Page>
       <NextSeo title="Django Python & Flask Experts - EC Infosolutions Pvt. Ltd." />
      <PytDev />
      <Clutch />
      <Footer />
    </Page>
  );
}
