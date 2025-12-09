"use client";

import { Button, PrizeCard } from "@/src/components";
import Image from "next/image";

import mainSectionStyles from "./styles.module.css";
import pageStyles from "../page.module.css";

const prizes = [
  {
    name: "SmartTV LG 70 Polegadas",
    image: "/images/prizes/smart-tv-lg.png",
  },
  {
    name: "Robô Aspirador Xiaomi",
    image: "/images/prizes/aspirador-xiaomi.png",
  },
  {
    name: "iPhone 17 Pro Max 256 GB",
    image: "/images/prizes/iphone-17-pro-max.png",
  },
  {
    name: "Lava Louças Continental Brastemp",
    image: "/images/prizes/lava-loucas-brastemp.png",
  },
];

export function MainSection() {
  return (
    <div className={pageStyles.mainContainer}>
      <div className={pageStyles.container}>
        <Image
          width={227}
          height={58}
          src="/images/logo-unipam.png"
          alt="logo"
        />
        <div className={mainSectionStyles.prizeHeaderContainer}>
          <h2>Não ganhou nada na confraternização do UNIPAM?</h2>
          <p>
            Este ano preparamos uma surpresa especial para você: alguns prêmios
            exclusivos foram reservados para deixar seu fim de ano ainda melhor.
          </p>
          <Button
            onClick={() =>
              document
                .getElementById("inscricao")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Quero Participar
          </Button>
        </div>
        <div className={mainSectionStyles.prizeListContainer}>
          <h3 className={pageStyles.titleSection}>
            Confira os Prêmios Disponíveis
          </h3>
          <div className={mainSectionStyles.prizeList}>
            {prizes.map((prize) => (
              <PrizeCard
                key={prize.name}
                name={prize.name}
                image={prize.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
