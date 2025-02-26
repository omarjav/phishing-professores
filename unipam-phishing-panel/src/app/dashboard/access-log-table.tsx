"use client";

import { DataTable } from "@/components/data-table";
import { AccessLog } from "@/services/unipam-phishing-test";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

export function AccessLogTable({ data }: { data: AccessLog[] }) {
  const columns: ColumnDef<AccessLog>[] = useMemo(
    () => [
      {
        accessorKey: "ip",
        header: "IP",
      },
      {
        accessorKey: "device",
        header: "Dispositivo",
      },
      {
        accessorKey: "createdAt",
        header: "Data de Cadastro",
        cell: ({ row }) => new Date(row.original.createdAt).toLocaleString(),
      },
      {
        accessorKey: "target.username",
        header: "Alvo Cadastrado",
        cell: ({ row }) => row.original.target?.username ?? "-",
      },
      {
        accessorKey: "expectedTarget.name",
        header: "Alvo Esperado",
        cell: ({ row }) => row.original.expectedTarget?.name ?? "-",
      }
    ],
    []
  );

  return <DataTable columns={columns} data={data} />;
}
