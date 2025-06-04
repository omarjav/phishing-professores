"use client";

import { InputProps } from "./types";
import styles from "./styles.module.css";
export function Input({ ...props }: InputProps) {
  return (
    <div
      tabIndex={0}
      className={styles.wrapper}
    >
      <input className={styles.input} {...props} />
      <div className={styles.inputLineBottom} />
    </div>
  );
}
