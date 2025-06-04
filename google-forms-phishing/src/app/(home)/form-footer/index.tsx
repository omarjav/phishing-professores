import Image from "next/image";

import styles from "./styles.module.css";

type FormFooterProps = {
  success?: boolean;
};

export function FormFooter({ success }: FormFooterProps) {
  return (
    <div className={styles.formFooter}>
      {!success && (
        <div className={styles.dontSharePassword}>
          Nunca envie senhas pelo Formulários Google.
        </div>
      )}

      <div className={styles.formCreatedBy}>
        Este formulário foi criado em FEPAM-Fundação Educacional de Patos de
        Minas.
      </div>

      <div className={styles.brandWrapper}>
        <Image
          src="/images/google.svg"
          alt="Google Logo"
          width={74}
          height={24}
        />
        <span>Formulários</span>
      </div>
    </div>
  );
}
