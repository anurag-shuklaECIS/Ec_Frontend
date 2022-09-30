import { NextSeo } from 'next-seo';
import Clutch from '../components/Clutch';
import Footer from '../components/footer/index';
import LabCore from '../components/manufacturing/manufacturingPage';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
      <NextSeo title="Software Solutions for Manufacturing | manufacturing process & tech" />
      <LabCore />
      <Clutch />
      <Footer />
    </Page>
  );
}
