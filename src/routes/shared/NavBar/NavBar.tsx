import NavTitle from '@/routes/shared/NavBar/components/NavTitle';
import NavigationMenu from '@/routes/shared/NavBar/components/NavigationMenu';

import styles from './navBar.module.scss';

// margin-bottom으로 요소간 간격 조절함
export default function LeftNavBar() {
  return (
    <nav className={styles.nav}>
      <section>
        <NavTitle />
      </section>
      <section>
        <NavigationMenu />
      </section>
    </nav>
  );
}
