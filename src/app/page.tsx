import Image from 'next/image';
import Navbar from '../components/navbar/navbar';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Question from '@/components/Questions/Question';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="main">
        <Header />
        <Question />
        <Footer />
      </div>
    </main>
  );
}
