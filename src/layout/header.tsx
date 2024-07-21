import Title from '@/layout/header/Title';
import PCNavigation from '@/layout/header/PCNavigation';
import SPNavigation from '@/layout/header/SPNavigation';
import Vision from '@/layout/header/Vision';

export default function Header() {
  return (
    <>
      <header className="pl-3.5 py-3.5 lg:pt-8 lg:pb-5 lg:pl-0 flex flex-col lg:items-center">
        <Title />
        <PCNavigation />
        <SPNavigation />
      </header>
      <Vision />
    </>
  );
}
