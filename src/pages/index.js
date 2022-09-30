import { NextSeo } from 'next-seo';
import Clutch from '../components/Clutch';
import Footer from '../components/footer/index';
import Header from '../components/home/index';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
      <NextSeo title="About EC Infosolutions - A custom software development company" />
      <Header />
      <Clutch/>
      <Footer />
    </Page>
  );
}
