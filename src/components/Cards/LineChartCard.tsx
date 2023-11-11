"use client";

import React, { Children } from "react";
import { useTheme } from "next-themes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import { HeartPulseIcon } from "lucide-react";
import { IconSquare } from "../ui/icon-square";

export default function LineChartCard({
  title,
  subtitle,
  data,
  className,
  icon: Icon,
  color,
}: {
  title: string;
  subtitle: string;
  data: any;
  className?: string;
  icon?: any;
  color?: string;
}) {
  const { theme } = useTheme();

  console.log(theme);
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {/* <IconSquare color={color} icon={Icon} /> */}
          {title}
        </CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload?.length) {
                    return (
                      <div className="rounded-lg border bg-gray-100 p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-muted-foreground text-[0.70rem] uppercase">
                              Goal
                            </span>
                            <span className="text-muted-foreground font-bold">
                              {payload[0]?.value}
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-muted-foreground text-[0.70rem] uppercase">
                              Achieved
                            </span>
                            <span className="font-bold">
                              {payload[1]?.value}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return null;
                }}
              />
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="average"
                activeDot={{
                  r: 6,
                  style: {
                    fill: `${theme === "dark" ? "#ffffff" : "#000000"}`,
                    opacity: 0.25,
                  },
                }}
                style={{
                  stroke: `${theme === "dark" ? "#ffffff" : "#000000"}`,
                  opacity: 0.25,
                }}
              />
              <Line
                type="monotone"
                dataKey="today"
                strokeWidth={2}
                activeDot={{
                  r: 8,
                  style: {
                    fill: `${theme === "dark" ? "#ffffff" : "#000000"}`,
                  },
                }}
                style={{
                  stroke: `${theme === "dark" ? "#ffffff" : "#000000"}`,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
