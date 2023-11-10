import { useTheme } from "next-themes";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { EXAMPLE_METRICS_A } from "data/example-metrics";
import LineChartCard from "./LineChartCard";

const data = [
  {
    revenue: 10400,
    subscription: 240,
  },
  {
    revenue: 14405,
    subscription: 300,
  },
  {
    revenue: 9400,
    subscription: 200,
  },
  {
    revenue: 8200,
    subscription: 278,
  },
  {
    revenue: 7000,
    subscription: 189,
  },
  {
    revenue: 9600,
    subscription: 239,
  },
  {
    revenue: 11244,
    subscription: 278,
  },
  {
    revenue: 26475,
    subscription: 189,
  },
];

export default function CardsStats() {
  const { theme } = useTheme();

  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-2">
      <LineChartCard
        title="Goal A"
        subtitle="Yo do more of this"
        data={EXAMPLE_METRICS_A}
      />
      <LineChartCard
        title="Goal B"
        subtitle="Yo do more of this"
        data={EXAMPLE_METRICS_A}
      />
    </div>
  );
}
