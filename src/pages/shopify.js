import { NextSeo } from 'next-seo';
import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import Page from '../components/page';
import PytDev from '../components/shopify/shopifyPage.js';

export default function Home() {
  return (
    <Page>
      <NextSeo title="Shopify Developers - EC Infosolutions Pvt. Ltd. Pune, India" />
      <PytDev />
      <Clutch />
      <Footer />
    </Page>
  );
}