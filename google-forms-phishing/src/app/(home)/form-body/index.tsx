"use client";

import { Button, Input, FieldCardControlled } from "@app/components";

import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TargetServices } from "@app/services/unipam-phishing-test";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  fullName: z.string().min(1, "Esta pergunta é obrigatória"),
  email: z
    .string()
    .email("E-mail inválido")
    .min(1, "Esta pergunta é obrigatória")
    .regex(/@unipam.edu.br$/, "Informe o seu e-mail institucional"),
  cpf: z.string().min(1, "Esta pergunta é obrigatória"),
  sector: z.string().min(1, "Esta pergunta é obrigatória"),
  managerName: z.string().min(1, "Esta pergunta é obrigatória"),
  disponibility: z.string().min(1, "Esta pergunta é obrigatória"),
  unipamYears: z.string().min(1, "Esta pergunta é obrigatória"),
  justification: z.string().optional(),
});

type FormValues = z.infer<typeof FormSchema>;

type FormBodyProps = {
  logId?: string;
};

export function FormBody({ logId }: FormBodyProps) {
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
      cpf: "",
      sector: "",
      managerName: "",
      disponibility: "",
      unipamYears: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    await TargetServices.saveTarget({
      email: data.email,
      username: data.fullName,
      logId,
    });

    redirect("/success");
  };

  return (
    <form className={styles.formBody} onSubmit={handleSubmit(onSubmit)}>
      <FieldCardControlled
        control={control}
        name="fullName"
        label="Informe seu nome completo"
        component={Input}
        placeholder="Sua resposta"
        errorMessage={errors.fullName?.message}
        required
      />

      <FieldCardControlled
        control={control}
        name="email"
        label="Informe seu e-mail institucional"
        component={Input}
        placeholder="Sua resposta"
        errorMessage={errors.email?.message}
        required
      />

      <FieldCardControlled
        control={control}
        name="cpf"
        label="Informe seu CPF"
        component={Input}
        placeholder="Sua resposta"
        errorMessage={errors.cpf?.message}
        required
      />

      <FieldCardControlled
        control={control}
        name="sector"
        label="Informe seu setor, bloco e sala"
        component={Input}
        placeholder="Sua resposta"
        errorMessage={errors.sector?.message}
        required
      />

      <FieldCardControlled
        control={control}
        name="managerName"
        label="Informe o nome do seu gestor"
        component={Input}
        placeholder="Sua resposta"
        errorMessage={errors.managerName?.message}
        required
      />

      <FieldCardControlled
        control={control}
        name="disponibility"
        label="Informe sua disponibilidade de horário"
        component={Input}
        placeholder="Sua resposta"
        errorMessage={errors.disponibility?.message}
        required
      />

      <FieldCardControlled
        control={control}
        name="unipamYears"
        label="Tempo de vínculo com o UNIPAM"
        component={Input}
        placeholder="Sua resposta"
        errorMessage={errors.unipamYears?.message}
        required
      />

      <FieldCardControlled
        control={control}
        name="justification"
        label="Em caso de não comparecimento, justifique: "
        component={Input}
        placeholder="Sua resposta"
      />

      <div>
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
}
