import styles from './greetText.module.scss';

export default function GreetText() {
  return (
    <div className={styles.container}>
      <span className={styles.greetText}>안녕하세요. 개발자 마지혁입니다.</span>
    </div>
  );
}
