import Image from "next/image";
import { PrizeCardProps } from "./types";

import styles from "./styles.module.css";

export function PrizeCard({ name, image }: PrizeCardProps) {
  return (
    <div className={styles.prizeCard}>
      <Image className={styles.prizeCardImage} fill src={image} alt={name} />
      <span>{name}</span>
    </div>
  );
}