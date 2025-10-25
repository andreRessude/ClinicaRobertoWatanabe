import imgLogo from '../../assets/favicon.ico'
import styles from './style.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.containerLogo}>
        <img className={styles.imgLogo} src={imgLogo} alt="Logo" />
        <p className={styles.textLogo}>Roberto Watanabe</p>
      </div>

      <nav className={styles.menu}>
        <a href="#header" className={styles.linkMenu}>Início</a>
        <a href="#sobre" className={styles.linkMenu}>Sobre</a>
        <a href="#terapias" className={styles.linkMenu}>Terapias</a>
        <a href="#faq" className={styles.linkMenu}>Perguntas Frequentes</a>
        <a href="#contato" className={styles.linkMenu}>Contato</a>

        <div className={styles.btnTrocarTema}>
          <button type="button">Trocar Tema</button>
        </div>

        <button className={styles.btnAgendar}>Agendar</button>
      </nav>
    </nav>
  );
}
