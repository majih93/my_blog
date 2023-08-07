import styles from './profileImg.module.scss';

import Img_Code from '@assets/images/img_code.jpg';

export default function ProfileImg() {
  return <img src={Img_Code} className={styles.container} alt="블로그 저자의 프로필 사진" />;
}
