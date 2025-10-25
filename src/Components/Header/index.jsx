import imgLogo from '../../assets/logo.png';
import styles from './style.module.css';

export default function Header() {
  return (
    <header className={styles.header} id="header">
      <div className={styles.containerHeader}>
        <img src={imgLogo} alt="Logomarca da clínica" className={styles.logoHeader} />
        <h1 className={styles.titleHeader}>Roberto Watanabe</h1>
        <p className={styles.subtitleHeader}>CLÍNICA HOLÍSTICA</p>
      </div>
    </header>
  );
}
