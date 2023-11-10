import { ResponsiveContainer, BarChart, Tooltip, Bar } from "recharts";
import theme from "tailwindcss/defaultTheme";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export const BarChartCard = ({
  title,
  data,
  labels,
  color,
}: {
  title: string;
  data: any[];
  labels: string[];
  color: string;
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-normal">Subscriptions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">+2350</div>
        <p className="text-muted-foreground text-xs">+180.1% from last month</p>
        <div className="mt-4 h-[80px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload?.length) {
                    return (
                      <div className="bg-background rounded-lg border p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="flex flex-col">
                            <span className="text-muted-foreground text-[0.70rem] uppercase">
                              Value
                            </span>
                            <span className="text-muted-foreground font-bold">
                              {payload[0]?.value}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  return null;
                }}
              />
              <Bar
                dataKey="subscription"
                style={{
                  stroke: `${theme === "dark" ? "#ffffff" : "#000000"}`,
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
