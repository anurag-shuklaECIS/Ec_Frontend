import { NextSeo } from 'next-seo';
import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import FreeVocal from '../components/freeVocal/freeVocalPage.js';
import Page from '../components/page';

export default function Freevocal() {
  return (
    <Page>
      <NextSeo title="About EC Infosolutions - A custom software development company" />
      <FreeVocal />
      <Clutch />
      <Footer />
    </Page>
  );
}
