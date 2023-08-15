import { Outlet } from 'react-router-dom';

import Header from '@/routes/shared/Header/Header';
import Footer from '@/routes/shared/Footer/Footer';
import NavBar from '@/routes/shared/NavBar/NavBar';

import styles from './defaultLayout.module.scss';

export default function DefaultLayout() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
