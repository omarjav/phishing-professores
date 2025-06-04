import { FieldCardProps } from "./types";

import styles from "./styles.module.css";

import { MdErrorOutline } from "react-icons/md";
import React from "react";

export function FieldCard<T extends object>({
  label,
  errorMessage,
  required,
  component: Component,
  ...rest
}: FieldCardProps<T>) {
  return (
    <div className={`${styles.wrapper} ${errorMessage ? styles.error : ""}`}>
      <div className={styles.wrapperLabel}>
        <label className={styles.label}>{label}</label>
        {required && <span className={styles.required}>*</span>}
      </div>
      <Component {...(rest as T)} />
      {errorMessage && (
        <div className={styles.errorWrapper}>
          <MdErrorOutline className={styles.errorIcon} />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
