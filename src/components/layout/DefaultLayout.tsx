import { Outlet } from 'react-router-dom';

import Header from '@/routes/_shared/Header/Header';
import LNB from '@/routes/_shared/LeftNavBar/LeftNavBar';
import Footer from '@/routes/_shared/Footer/Footer';

export default function DefaultLayout() {
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
}
