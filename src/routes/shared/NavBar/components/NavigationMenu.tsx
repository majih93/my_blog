import { NavLink } from 'react-router-dom';

import styles from './navigationMenu.module.scss';

const navigationLinks = [
  { url: '/', title: 'Home' },
  { url: '/categories', title: 'Categories' },
  { url: '/about-me', title: 'About Me' },
];

export default function NavigationMenu() {
  return (
    <ul className={styles.navList}>
      {navigationLinks.map(({ url, title }) => (
        <NavItem url={url} linkTitle={title} />
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
