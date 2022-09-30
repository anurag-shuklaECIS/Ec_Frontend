import { NextSeo } from 'next-seo';
import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import Page from '../components/page';
import LabCore from '../components/Pricing/pricingPage.js';

export default function Home() {
  return (
    <Page>
       <NextSeo title="Cost of App Development & ROI Calculator - EC Infosolutions" />
      <LabCore />
      <Clutch />
      <Footer />
    </Page>
  );
}
