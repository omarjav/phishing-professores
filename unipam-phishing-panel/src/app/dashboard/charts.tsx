"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Target } from "@/services/unipam-phishing-test/@types/target";
import { AccessLog } from "@/services/unipam-phishing-test";

export const description = "An interactive bar chart";

const chartConfig = {
  views: {
    label: "Quantidade",
  },
  targets: {
    label: "Alvos",
    color: "hsl(var(--chart-1))",
  },
  access: {
    label: "Acessos",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Charts({
  targets,
  accessLog,
}: {
  targets: Target[];
  accessLog: AccessLog[];
}) {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("targets");

  const infoByDate = React.useMemo(() => {
    const aggregatedData = [...targets, ...accessLog].reduce((acc, item) => {
      const date = new Date(item.createdAt).toISOString().slice(0, 10);

      if (!acc[date]) {
        acc[date] = { createdAt: date, targets: 0, access: 0 };
      }

      if ('logId' in item) {
        acc[date].access += 1;
      } else {
        acc[date].targets += 1;
      }

      return acc;
    }, {} as Record<string, { createdAt: string; targets: number; access: number }>);

    return Object.values(aggregatedData);
  }, [targets, accessLog]);

  const total = React.useMemo(
    () => ({
      targets: targets.length,
      access: accessLog.length,
    }),
    [targets, accessLog]
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
            <CardTitle>Alvos vs Acessos</CardTitle>
        </div>
        <div className="flex">
          {["targets", "access"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={infoByDate}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="createdAt"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("pt-BR", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("pt-BR", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
