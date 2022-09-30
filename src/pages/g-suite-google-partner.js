import { NextSeo } from 'next-seo';
import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import ContactUs from '../components/googleCloud/googleCloudPage.js';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
      <NextSeo title="G Suite Google Partner in Pune | EC Infosolutions Pvt. Ltd." />
      <ContactUs />
      <Clutch />
      <Footer />
    </Page>
  );
}
