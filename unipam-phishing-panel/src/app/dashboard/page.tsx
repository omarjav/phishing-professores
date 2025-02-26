"use client";

import { useEffect, useState } from "react";
import {
  AccessLog,
} from "@/services/unipam-phishing-test";
import { Charts } from "./charts";
import { TargetTable } from "./target-table";
import { AccessLogTable } from "./access-log-table";
import { getData } from "./actions/fetch-data";
import { Target } from "@/services/unipam-phishing-test/@types/target";
import { Button } from "@/components/ui/button";
import { ExpectedTargetTable } from "./expected-target-table";
import { ExpectedTarget } from "@/services/unipam-phishing-test/@types/expected-target-log";

export default function Dashboard() {
  const [targets, setTargets] = useState<Target[]>([]);
  const [accessLog, setAccessLog] = useState<AccessLog[]>([]);
  const [expectedTarget, setExpectedTarget] = useState<ExpectedTarget[]>([]);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  async function fetchData() {
    getData().then(({ targets, accessLog, expectedTarget }) => {
      setTargets(targets);
      setAccessLog(accessLog);
      setExpectedTarget(expectedTarget);
      setLastUpdated(new Date());
    });
  }

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Dashboard</h1>
          <p className="text-sm text-gray-500">
            Última atualização: {lastUpdated.toLocaleString()}
          </p>
        </div>
        <Button onClick={fetchData}>Atualizar</Button>
      </div>
      <Charts targets={targets} accessLog={accessLog} />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Alvos Cadastrados</h2>
      <TargetTable data={targets} />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Acessos</h2>
      <AccessLogTable data={accessLog} />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Alvos Esperados</h2>
      <ExpectedTargetTable data={expectedTarget} />
    </div>
  );
}
