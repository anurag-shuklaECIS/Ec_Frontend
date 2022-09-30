import { NextSeo } from 'next-seo';
import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import LeaderShip from '../components/leaderShip';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
       <NextSeo title="About EC Infosolutions - A custom software development company" />
      <LeaderShip />
      <Clutch />
      <Footer />
    </Page>
  );
}
