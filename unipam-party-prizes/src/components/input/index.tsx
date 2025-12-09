import { InputProps } from "./types";

import styles from "./styles.module.css";

export function Input({
  placeholder,
  value,
  onChange,
  type = "text",
  name,
  id,
  required = false,
  disabled = false,
  className,
  errorMessage,
}: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <input
        className={className ? `${styles.input} ${className}` : styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        required={required}
        disabled={disabled}
      />
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}

