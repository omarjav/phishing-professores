import Image from "next/image";
import styles from "./styles.module.css";

export default function Success() {
  return (
    <div className={styles.successContainer}>
      <Image
        className={styles.successImage}
        src="/images/surprise.svg"
        alt="Sucesso"
        fill
      />
      <div className={styles.successContent}>
        <h1>Sucesso!</h1>
        <p>
          Obrigado por participar do nosso sorteio! Fique ligado em nossas redes
          sociais para saber quando serão divulgados os ganhadores.
        </p>
      </div>
    </div>
  );
}
