"use client";

import { DataTable } from "@/components/data-table";
import { ExpectedTarget } from "@/services/unipam-phishing-test/@types/expected-target-log";

import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

export function ExpectedTargetTable({ data }: { data: ExpectedTarget[] }) {
  const columns: ColumnDef<ExpectedTarget>[] = useMemo(
    () => [
      {
        accessorKey: "hash",
        header: "Hash",
      },
      {
        accessorKey: "name",
        header: "Nome",
      },
      {
        accessorKey: "email",
        header: "E-mail",
      },
      {
        accessorKey: "accessLog",
        header: "Acessou",
        cell: ({row}) => row.original.accessLog.length > 0 ? 'Sim' : 'Não'
      },
      {
        accessorKey: "accessLog.target",
        header: "Cadastrou",
        cell: ({row}) => row.original.accessLog.filter(log => log.target).length > 0 ? 'Sim' : 'Não'
      }
    ],
    []
  );

  return <DataTable columns={columns} data={data} />;
}
