"use client";

import React from "react";
import { useTheme } from "next-themes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

export default function CardMetrics({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const { theme } = useTheme();
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4"></CardContent>
    </Card>
  );
}
