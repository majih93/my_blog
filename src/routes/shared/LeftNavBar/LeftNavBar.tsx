import ProfileImg from '@/routes/shared/LeftNavBar/components/ProfileImg';
import GreetText from '@/routes/shared/LeftNavBar/components/GreetText';
import NavigationMenu from '@/routes/shared/LeftNavBar/components/NavigationMenu';
import NavFooter from '@/routes/shared/LeftNavBar/components/NavFooter';

import styles from './leftNavBar.module.scss';

// margin-bottom으로 요소간 간격 조절함
export default function LeftNavBar() {
  return (
    <nav className={styles.nav}>
      <ProfileImg />
      <GreetText />
      <NavigationMenu />
      <NavFooter />
    </nav>
  );
}
