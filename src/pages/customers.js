import { NextSeo } from 'next-seo';
import ClientSuccess from '../components/clientSuccess/index';
import Clutch from '../components/Clutch/index';
import Footer from '../components/footer';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
       <NextSeo title="Our Happy Customers Worldwide | EC Infosolutions Pvt Ltd" />
      <ClientSuccess />
      <Clutch />
      <Footer />
    </Page>
  );
}
