import { NextSeo } from 'next-seo';
import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import Page from '../components/page';
import PrivacyPolicy from '../components/privacyPolicy/index';

export default function Home() {
  return (
    <Page>
       <NextSeo title="Privacy Policy & Diclaimer | EC Infosolutions Pvt. Ltd., Pune" />
      <PrivacyPolicy />
      <Clutch />
      <Footer />
    </Page>
  );
}
