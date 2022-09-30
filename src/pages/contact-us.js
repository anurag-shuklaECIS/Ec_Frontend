import { NextSeo } from 'next-seo';
import Clutch from '../components/Clutch';
import ContactUs from '../components/contactUs/contactUsPage.js';
import Footer from '../components/footer';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
      <NextSeo title="Contact Us Today to Discuss Your Requirements - EC Infosolutions" />
      <ContactUs />
      <Clutch />
      <Footer />
    </Page>
  );
}
