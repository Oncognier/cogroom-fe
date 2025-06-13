import Footer from '@/components/organisms/Footer/Footer';
import Header from '@/components/organisms/Header/Header';

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
