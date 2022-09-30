import { NextSeo } from 'next-seo';
import Blog from '../components/blog/blogPage.js';
import Footer from '../components/footer';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
       <NextSeo title="Blog - Innovation is Life - EC Infosolutions Pvt. Ltd." />
      <Blog />
      <Footer />
    </Page>
  );
}
