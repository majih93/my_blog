import { Outlet } from 'react-router-dom';

import Header from '@/routes/shared/Header/Header';
import Footer from '@/routes/shared/Footer/Footer';
import LeftNavBar from '@/routes/shared/LeftNavBar/LeftNavBar';

import styles from './defaultLayout.module.scss';

export default function DefaultLayout() {
  return (
    <>
      <LeftNavBar />
      <main className={styles.main}>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
