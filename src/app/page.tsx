import Footer from '@/layout/footer';
import Header from '@/layout/header';
import TopButton from '@/shared/TopButton';
import Top from '@/app/home/components/Top';
import Vision from '@/app/home/components/Vision';
import Work from '@/app/home/components/Work';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Top />
        <Vision />
        <div className="lg:my-24 my-16 lg:h-[25vw] h-[35vw] w-[calc(97vw-3rem)] bg-home_work bg-cover bg-center bg-no-repeat shadow-home_work brightness-75" />
        <Work />
        <div id="info" className="lg:mx-12 mr-9 bg-blue-300 h-[1500px]">
          お知らせ
        </div>
        <div id="company" className="lg:mx-12 mr-9 bg-orange-300 h-[3000px]">
          会社情報
        </div>
        <div id="contact" className="lg:mx-12 mr-9 bg-yellow-300 h-[1000px]">
          お問い合わせ
        </div>
      </main>
      <Footer />
      <TopButton />
    </>
  );
}
