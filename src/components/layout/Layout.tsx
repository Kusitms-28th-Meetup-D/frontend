import { useLocation } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const showHeaderFooter = !location.pathname.startsWith(
    '/review/external/mobile',
  );

  return (
    <>
      {showHeaderFooter && <Header />}
      {children}
      {showHeaderFooter && <Footer />}
    </>
  );
};

export default Layout;
