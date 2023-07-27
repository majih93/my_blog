import { Outlet } from 'react-router-dom';

import Header from '@/routes/_shared/Header/Header';
import LNB from '@/routes/_shared/LeftNavBar/LeftNavBar';
import Footer from '@/routes/_shared/Footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <LNB />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
