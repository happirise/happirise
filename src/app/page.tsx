import Footer from '@/layout/footer';
import Header from '@/layout/header';
import TopButton from '@/shared/TopButton';
import Top from '@/app/home/components/Top';
import Vision from '@/app/home/components/Vision';
import Work from '@/app/home/components/Work';
import Company from './home/components/Company';
import Services from './home/components/Services';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Top />
        <Vision />
        <Work />
        <Services />
        <Company />
        <div id="contact" className="lg:mx-12 mr-9 bg-yellow-300 h-[1000px]">
          お問い合わせ
        </div>
      </main>
      <Footer />
      <TopButton />
    </>
  );
}
