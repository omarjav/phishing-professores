"use client";

import { useCallback, useEffect, useState } from "react";
import { AccessLog, TestCategory } from "@/services/unipam-phishing-test";
import { Charts } from "./charts";
import { TargetTable } from "./target-table";
import { AccessLogTable } from "./access-log-table";
import { getCategories, getData } from "./actions/fetch-data";
import { Target } from "@/services/unipam-phishing-test/@types/target";
import { Button } from "@/components/ui/button";
import { ExpectedTargetTable } from "./expected-target-table";
import { ExpectedTarget } from "@/services/unipam-phishing-test/@types/expected-target-log";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Dashboard() {
  const [targets, setTargets] = useState<Target[]>([]);
  const [accessLog, setAccessLog] = useState<AccessLog[]>([]);
  const [expectedTarget, setExpectedTarget] = useState<ExpectedTarget[]>([]);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [categories, setCategories] = useState<TestCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState("");

  const fetchCategories = useCallback(async () => {
    const categories = await getCategories();

    setCategories(categories);

    if (categories.length > 0) {
      setActiveCategory(categories[0].categoryId);
    }
  }, []);

  const fetchData = useCallback(() => {
    getData(activeCategory).then(
      ({ targets, accessLog, expectedTarget,lastUpdated }) => {
        setTargets(targets);
        setAccessLog(accessLog);
        setExpectedTarget(expectedTarget);
        setCategories(categories);
        setLastUpdated(lastUpdated);
      }
    );
  }, [activeCategory, categories]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000);

    return () => clearInterval(interval);
  }, [fetchData]);


  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      <div className="mb-4">
        <Select value={activeCategory} onValueChange={setActiveCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.categoryId} value={category.categoryId}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
