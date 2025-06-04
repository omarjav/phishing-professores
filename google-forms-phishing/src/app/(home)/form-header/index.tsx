import Link from "next/link";
import styles from "./styles.module.css";

type FormHeaderProps = {
  success?: boolean;
};

export function FormHeader({ success }: FormHeaderProps) {
  if (success) {
    return (
      <div>
        <div className={styles.banner}></div>
        <div className={styles.formHeader}>
          <div className={styles.formHeaderLine} />
          <div className={styles.contentWrapper}>
            <div className={styles.title}>Você foi convocado!</div>
            <p>Sua resposta foi registrada.</p>
            <div className={styles.newAnswerLink}>
              <Link href="/">Enviar outra resposta</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.banner}></div>
      <div className={styles.formHeader}>
        <div className={styles.formHeaderLine} />
        <div className={styles.contentWrapper}>
          <div className={styles.title}>Você foi convocado!</div>
          <p>
            Você foi convocado pelo UNIPAM/FEPAM para participar de uma
            auditoria. Sua presença é indispensável.
          </p>
        </div>
        <div className={styles.line} />
        <div className={styles.contentWrapper}>
          <div className={styles.requiredAnswers}>
            * Indica uma pergunta obrigatória
          </div>
        </div>
      </div>
    </div>
  );
}
