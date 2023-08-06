import ProfileImg from '@/routes/shared/LeftNavBar/components/ProfileImg';
import GreetText from '@/routes/shared/LeftNavBar/components/GreetText';
import NavigationMenu from '@/routes/shared/LeftNavBar/components/NavigationMenu';
import NavFooter from '@/routes/shared/LeftNavBar/components/NavFooter';

export default function LeftNavBar() {
  return (
    <nav>
      <ProfileImg />
      <GreetText />
      <NavigationMenu />
      <NavFooter />
    </nav>
  );
}