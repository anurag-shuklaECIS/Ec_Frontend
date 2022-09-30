import { NextSeo } from 'next-seo';
import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import LabCore from '../components/labCore/labCorePage.js';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
      <NextSeo title="Agritech Solutions - Digital Solutions for Agribusiness | Farm Management" />
      <LabCore />
      <Clutch />
      <Footer />
    </Page>
  );
}
