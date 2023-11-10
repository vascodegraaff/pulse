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
import { colorClasses } from "~/lib/utils";

export default function CardsStats() {
  const { theme } = useTheme();

  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-2">
      <LineChartCard
        title="Marathon"
        subtitle="40 kms of Glory"
        data={EXAMPLE_METRICS_A}
      />
      <LineChartCard
        title="Daily Pushups"
        subtitle="Yo do more of this"
        data={EXAMPLE_METRICS_A}
      />
    </div>
  );
}
