import { NextSeo } from 'next-seo';
import Clutch from '../components/Clutch';
import CustomerAppDev from '../components/customerAppDev/customerAppDevPage.js';
import Footer from '../components/footer';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
       <NextSeo title="App Development - EC Infosolutions Pvt. Ltd. Pune" />
      <CustomerAppDev />
      <Clutch />
      <Footer />
    </Page>
  );
}
