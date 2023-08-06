import { NavLink } from 'react-router-dom';

import styles from './navigationMenu.module.scss';

const navigationLinks = [];

export default function NavigationMenu() {
  return (
    <ul className={styles.ul}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/categories">Categories</NavLink>
      <NavLink to="/about-me">저는...</NavLink>
    </ul>
  );
}

const NavItem = ({ url, linkTitle }) => {
  return (
    <li>
      <NavLink to={url}>
        <span>{linkTitle}</span>
      </NavLink>
    </li>
  );
};
