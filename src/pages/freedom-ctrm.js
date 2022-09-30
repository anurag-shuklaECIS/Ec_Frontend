import { NextSeo } from 'next-seo';
import Clutch from '../components/Clutch';
import Footer from '../components/footer/index';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
       <NextSeo title="Freedom CTRM | EC Infosolutions" />
      <div className='clutchBox'>
      <Clutch />
      </div>
     
      <Footer />
    </Page>
  );
}