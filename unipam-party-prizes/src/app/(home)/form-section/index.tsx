"use client";

import { Button, Input } from "@/src/components";

import formSectionStyles from "./styles.module.css";
import pageStyles from "../page.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputControlled } from "@/src/components/input-controlled";
import { TargetServices } from "@/src/services/unipam-phishing-test";
import { FormSectionProps } from "./types";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  fullName: z.string().min(1, "Informe seu nome completo"),
  email: z
    .string()
    .min(1, "Informe seu e-mail institucional")
    .refine((email) => /@unipam.edu.br$/.test(email), {
      message: "Informe o e-mail institucional do UNIPAM",
    }),
  sector: z.string().min(1, "Informe seu setor"),
  phone: z.string().min(1, "Informe seu telefone"),
});

type FormValues = z.infer<typeof FormSchema>;

export function FormSection({ logId }: FormSectionProps) {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    mode: "onBlur",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      sector: "",
      phone: "",
    },
  });

  const onSubmit = handleSubmit(async (data: FormValues) => {
    await TargetServices.saveTarget({
      email: data.email,
      username: data.fullName,
      logId,
    });

    redirect("/success");
  });

  return (
    <div id="inscricao" className={formSectionStyles.footerContainer}>
      <div className={pageStyles.mainContainer}>
        <div className={formSectionStyles.formContainer}>
          <div className={formSectionStyles.formHeader}>
            <h3 className={pageStyles.titleSection + " " + pageStyles.white}>
              Participe do Sorteio
            </h3>
            <p className={formSectionStyles.formDescription}>
              Preencha o formulário abaixo e não perca a oportunidade de ganhar
              prêmios incríveis.
            </p>
          </div>

          <form onSubmit={onSubmit}>
            <InputControlled
              control={control}
              name="fullName"
              placeholder="Nome Completo"
              errorMessage={errors.fullName?.message}
            />
            <InputControlled
              control={control}
              name="email"
              placeholder="E-mail Institucional"
              errorMessage={errors.email?.message}
            />
            <InputControlled
              control={control}
              name="sector"
              placeholder="Setor"
              errorMessage={errors.sector?.message}
            />
            <InputControlled
              control={control}
              name="phone"
              placeholder="Telefone"
              errorMessage={errors.phone?.message}
            />
            <div className={formSectionStyles.formButtonContainer}>
              <Button type="submit">Participar</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
