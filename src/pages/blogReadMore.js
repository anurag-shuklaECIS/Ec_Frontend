import BlogReadMore from '../components/blogReadMore/blogReadMorePage';
import Clutch from '../components/Clutch';
import Footer from '../components/footer';
import Page from '../components/page';

export default function Home() {
  return (
    <Page>
      <BlogReadMore />
      <Clutch />
      <Footer />
    </Page>
  );
}
