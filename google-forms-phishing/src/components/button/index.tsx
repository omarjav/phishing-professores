import styles from "./styles.module.css";
import { ButtonProps } from "./types";

export function Button({ children }: ButtonProps) {
  return <button className={styles.button}>{children}</button>;
}
