import { NextSeo } from 'next-seo';
import Clutch from '../components/Clutch';
import LabCore from '../components/eCommerce/eCommercePage.js';
import Footer from '../components/footer';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
       <NextSeo title="Freedom eCommerce - EC Infosolutions Pvt. Ltd. Pune" />
      <LabCore />
      <Clutch />
      <Footer />
    </Page>
  );
}
