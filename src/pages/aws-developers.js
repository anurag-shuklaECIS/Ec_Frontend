import { NextSeo } from 'next-seo';
import FreeVocal from '../components/awsPartner/awsPartnerPage.js';
import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
      <NextSeo title="Amazon Web Services AWS - EC Infosolutions | Amazon EC2" />
      <FreeVocal />
      <Clutch />
      <Footer />
    </Page>
  );
}
