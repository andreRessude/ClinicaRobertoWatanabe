import { FaSun, FaMoon } from "react-icons/fa";
import imagemLogo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import styles from "./style.module.css";

function Navbar({ onOpenModal }) {

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>

          {/* Logo */}
          <div className={styles.logoContainer}>
            <img src={imagemLogo} alt="Logo" className={styles.logoImg} />
            <span className={styles.logoText}>Roberto Watanabe</span>
          </div>

          {/* Links e Botões */}
          <div className={styles.links}>
            <a href="#header" className={styles.link}>Início</a>
            <a href="#sobre" className={styles.link}>Sobre</a>
            <a href="#terapias" className={styles.link}>Terapias</a>
            <a href="#questions" className={styles.link}>Perguntas Frequentes</a>
            <a href="#contato" className={styles.link}>Contato</a>

            {/* Botão troca tema */}
            <button className={styles.themeToggle} onClick={toggleTheme}>
              <FaSun className={`${styles.sunIcon} ${isDark ? styles.iconInactive : ''}`} />
              <FaMoon className={`${styles.moonIcon} ${isDark ? '' : styles.iconInactive}`} />
            </button>

            {/* Botão agendar */}
            <button onClick={onOpenModal} className={styles.buttonAgendar}>
              Agendar
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;