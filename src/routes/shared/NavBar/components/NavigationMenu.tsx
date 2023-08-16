import { NavLink } from 'react-router-dom';

import styles from './navigationMenu.module.scss';

// 데이터와 UI 분리의 일환으로, NavBar 에 표시될 요소들에 대한 데이터를 담은 배열 따로 생성
const navigationLinks = [
  { url: '/', title: 'Home' },
  { url: '/categories', title: 'Categories' },
  { url: '/about-me', title: 'About Me' },
];

export default function NavigationMenu() {
  return (
    <ul className={styles.navList}>
      {navigationLinks.map(({ url, title }) => (
        <NavItem key={title} url={url} linkTitle={title} />
      ))}
    </ul>
  );
}

interface NavItemProps {
  url: string;
  linkTitle: string;
}

const NavItem = ({ url, linkTitle }: NavItemProps) => {
  return (
    <li>
      <NavLink to={url}>
        <span className={styles.navItemTitle}>{linkTitle}</span>
      </NavLink>
    </li>
  );
};
