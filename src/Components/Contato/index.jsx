import imgFacebook from "../../assets/facebook.png";
import imgGmail from "../../assets/gmail.png";
import imgMaps from "../../assets/iconMaps.png";
import imgRoberto from "../../assets/Roberto-Perfil.png";
import imgWhatsapp from "../../assets/whatsapp.png";
import styles from "./style.module.css";

export default function Contato() {
  return (
    <section className={styles.contato} id="contato">
      <div className={styles.containerTitulo}>
        <h2 className={styles.tituloContato}>Contato</h2>
      </div>

      <div className={styles.containerContatos}>

        <div className={styles.containerImgRoberto}>
          <img className={styles.imgRoberto} src={imgRoberto} alt="Sr. Roberto Watanabe" />
        </div>

        <div className={styles.containerContatTypes}>

          <div className={styles.containerContatType}>
            <img src={imgGmail} alt="Ícone email" />
            <div>
              <p className={styles.textContatType}>Email:</p>
              <a href="mailto:robertowatanabetao@hotmail.com" target="_blank" rel="noopener noreferrer" >
                robertowatanabetao@hotmail.com
              </a>
            </div>
          </div>

          <div className={styles.containerContatType}>
            <img src={imgWhatsapp} alt="Ícone WhatsApp" />
            <div>
              <p className={styles.textContatType}>WhatsApp:</p>
              <a href="https://wa.me/5511970514020" target="_blank" rel="noopener noreferrer">
                (11) 97051-4020
              </a>
            </div>
          </div>

          <div className={styles.containerContatType}>
            <img src={imgFacebook} alt="Ícone Facebook" />
            <div>
              <p className={styles.textContatType}>Facebook:</p>
              <a href="https://web.facebook.com/roberto.watanabe.148" target="_blank" rel="noopener noreferrer">
                Roberto Watanabe
              </a>
            </div>
          </div>

          <div className={styles.containerContatType}>
            <img src={imgMaps} alt="Ícone Maps" />
            <div>
              <p className={styles.textContatType}>Endereço:</p>
              <a href="https://maps.app.goo.gl/tvhnLLzaqHwPpK4V9" target="_blank" rel="noopener noreferrer">
                R. Alberto Grasson, 155 - São Lourenço, Bragança Paulista
              </a>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
