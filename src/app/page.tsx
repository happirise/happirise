import Footer from '@/layout/footer';
import Header from '@/layout/header';
import TopButton from '@/shared/TopButton';
import Top from '@/app/home/components/Top';
import Vision from '@/app/home/components/Vision';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-screen">
        <Top />
        <Vision />
        <div id="work" className="lg:mx-12 mr-9 bg-red-300 h-[300px]"></div>
        <div id="work" className="lg:mx-12 mr-9 bg-green-300 h-[2000px]">
          私たちの仕事
        </div>
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
