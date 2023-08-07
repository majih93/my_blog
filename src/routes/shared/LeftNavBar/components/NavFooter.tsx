import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './navFooter.module.scss';

const GITHUB_URL = 'https://github.com/majih93';

export default function NavFooter() {
  return (
    <footer className={styles.container}>
      <a href={GITHUB_URL} target="_blank" rel="nonreferrer">
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
    </footer>
  );
}
