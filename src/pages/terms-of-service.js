import { NextSeo } from 'next-seo';
import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import Page from '../components/page';
import TeamService from '../components/teamService/index';

export default function Home() {
  return (
    <Page>
       <NextSeo title="Terms and Conditions of Service | EC Infosolutions Pvt. Ltd. Pune" />
      <TeamService />
      <Clutch />
      <Footer />
    </Page>
  );
}
