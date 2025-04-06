"use client"

import {
  ChartArea,
  ChartAxisOptions,
  ChartContainer,
  ChartLegend,
  ChartLine,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const data = [
  {
    name: "00:00",
    "Oil Prices": 8.2,
    "Fed Rate": 7.1,
    "Tech AI": 6.5,
    "EU Trade": 5.8,
    "Bank Earnings": 5.2,
  },
  {
    name: "04:00",
    "Oil Prices": 8.3,
    "Fed Rate": 7.2,
    "Tech AI": 6.3,
    "EU Trade": 5.9,
    "Bank Earnings": 5.4,
  },
  {
    name: "08:00",
    "Oil Prices": 8.5,
    "Fed Rate": 7.5,
    "Tech AI": 6.7,
    "EU Trade": 6.1,
    "Bank Earnings": 5.6,
  },
  {
    name: "12:00",
    "Oil Prices": 8.7,
    "Fed Rate": 8.0,
    "Tech AI": 6.9,
    "EU Trade": 6.2,
    "Bank Earnings": 6.0,
  },
  {
    name: "16:00",
    "Oil Prices": 8.8,
    "Fed Rate": 8.3,
    "Tech AI": 7.1,
    "EU Trade": 6.3,
    "Bank Earnings": 6.5,
  },
  {
    name: "20:00",
    "Oil Prices": 8.9,
    "Fed Rate": 8.7,
    "Tech AI": 7.2,
    "EU Trade": 6.5,
    "Bank Earnings": 7.8,
  },
]

export function TrendingChart() {
  return (
    <div className="h-[300px] w-full">
      <ChartContainer data={data}>
        <ChartAxisOptions
          xAxis={[{ scaleId: "x", label: "Time (24h)" }]}
          yAxis={[{ scaleId: "y", label: "Impact Score" }]}
        />
        <ChartLegend />
        <ChartTooltip>
          <ChartTooltipContent />
        </ChartTooltip>
        <ChartArea>
          <ChartLine
            scaleX={{ scaleId: "x", accessor: "name" }}
            scaleY={{ scaleId: "y", accessor: "Oil Prices" }}
            name="Oil Prices"
            type="natural"
            color="#f59e0b"
          />
          <ChartLine
            scaleX={{ scaleId: "x", accessor: "name" }}
            scaleY={{ scaleId: "y", accessor: "Fed Rate" }}
            name="Fed Rate"
            type="natural"
            color="#3b82f6"
          />
          <ChartLine
            scaleX={{ scaleId: "x", accessor: "name" }}
            scaleY={{ scaleId: "y", accessor: "Tech AI" }}
            name="Tech AI"
            type="natural"
            color="#8b5cf6"
          />
          <ChartLine
            scaleX={{ scaleId: "x", accessor: "name" }}
            scaleY={{ scaleId: "y", accessor: "EU Trade" }}
            name="EU Trade"
            type="natural"
            color="#ef4444"
          />
          <ChartLine
            scaleX={{ scaleId: "x", accessor: "name" }}
            scaleY={{ scaleId: "y", accessor: "Bank Earnings" }}
            name="Bank Earnings"
            type="natural"
            color="#10b981"
          />
        </ChartArea>
      </ChartContainer>
    </div>
  )
}

