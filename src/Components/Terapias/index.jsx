import { terapias } from '../../assets/data';
import styles from './style.module.css';

export default function Terapias() {
    return(    
        <section className={styles.sectionTerapias} id="terapias">
            <h1 className={styles.tituloTerapias}>Terapias Oferecidas</h1>

            <div className={styles.containerTerapias}>
                {terapias.map((terapia) => (
                    <div key={terapia.id} className={styles.cardTerapia}>
                        <div className={styles.overlay}>
                            <h3 className={styles.tituloCard}>{terapia.titulo}</h3>
                            <p className={styles.subtituloCard}>{terapia.subtitulo}</p>
                        </div>
                    </div>
                ))}
            </div>

            <a className={styles.btnAgendar}>
                Agende sua consulta
            </a>
        </section>
    );
}