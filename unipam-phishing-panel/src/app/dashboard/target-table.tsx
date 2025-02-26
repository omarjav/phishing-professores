"use client";

import { DataTable } from "@/components/data-table";
import { Target } from "@/services/unipam-phishing-test/@types/target";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

export function TargetTable({ data }: { data: Target[] }) {
  const columns: ColumnDef<Target>[] = useMemo(
    () => [
      {
        accessorKey: "username",
        header: "Usuário",
      },
      {
        accessorKey: "email",
        header: "E-mail",
      },
      {
        accessorKey: "createdAt",
        header: "Data de Cadastro",
        cell: ({ row }) => new Date(row.original.createdAt).toLocaleString(),
      },
    ],
    []
  );

  return <DataTable columns={columns} data={data} />;
}
