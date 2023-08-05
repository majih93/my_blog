import { Outlet } from 'react-router-dom';

import Header from '@/routes/shared/Header/Header';
import LNB from '@/routes/shared/LeftNavBar/LeftNavBar';
import Footer from '@/routes/shared/Footer/Footer';

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
