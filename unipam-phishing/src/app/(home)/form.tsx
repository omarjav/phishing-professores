"use client";

import { Button } from "@app/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@app/components/ui/form";
import { Input } from "@app/components/ui/input";
import { TargetServices } from "@app/services/unipam-phishing-test";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  email: z
    .string()
    .email("Informe um e-mail válido")
    .regex(/@unipam.edu.br$/, "Informe o e-mail institucional do UNIPAM"),
  username: z.string().min(4, "Informe um usuário válido"),
  password: z.string().min(3, "Informe uma senha válida"),
});

type FormValues = z.infer<typeof FormSchema>;

type FormRedeemCupomProps = {
  logId?: string;
}

export function FormRedeemCupom({ logId }: FormRedeemCupomProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
   await TargetServices.saveTarget({
      email: data.email,
      username: data.username,
      logId,
    });

    redirect("/success");
  };

  return (
    <div className="w-full min-h-[50%] p-8 pt-16 lg:min-w-[50%] lg:min-h-svh lg:flex lg:items-center lg:p-12">
      <div className="lg:w-full">
        <h2 className="text-2xl text-primary font-normal md:text-3xl">
          Resgate seu{" "}
          <strong className="font-semibold">Cupom de Desconto</strong>
        </h2>
        <p className="mt-2 mb-6">
          Preencha o formulário abaixo e receba o seu cupom no seu e-mail
          institucional.
        </p>
        <Form {...form}>
          <form
            id="regatar"
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
            action="POST"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail Institucional</FormLabel>
                  <FormControl>
                    <Input placeholder="Informe seu e-mail institucional" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Usuário do Portal</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Informe o seu usuário do portal"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha do Portal</FormLabel>
                    <FormControl>
                    <Input
                      type="password"
                      placeholder="Informe a sua senha do portal"
                      autoComplete="disabled"
                      {...field}
                    />
                    </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              className="w-full mt-2"
              variant="secondary"
              disabled={form.formState.isSubmitting}
            >
              Receber Cupom
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
