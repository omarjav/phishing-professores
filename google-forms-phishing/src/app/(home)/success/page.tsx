import { FormFooter } from "../form-footer";
import { FormHeader } from "../form-header";

import styles from "../page.module.css";

export default function Success() {
  return (
    <div className={styles.contentWrapper}>
      <FormHeader success />
      <FormFooter success />
    </div>
  );
}
