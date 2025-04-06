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
    name: "Jan",
    Retail: 42,
    Manufacturing: 52,
    Technology: 38,
    Energy: 120,
  },
  {
    name: "Feb",
    Retail: 45,
    Manufacturing: 51,
    Technology: 40,
    Energy: 118,
  },
  {
    name: "Mar",
    Retail: 40,
    Manufacturing: 50,
    Technology: 43,
    Energy: 122,
  },
  {
    name: "Apr",
    Retail: 38,
    Manufacturing: 52,
    Technology: 45,
    Energy: 125,
  },
  {
    name: "May",
    Retail: 42,
    Manufacturing: 49,
    Technology: 48,
    Energy: 119,
  },
  {
    name: "Jun",
    Retail: 45,
    Manufacturing: 50,
    Technology: 46,
    Energy: 115,
  },
  {
    name: "Jul",
    Retail: 48,
    Manufacturing: 48,
    Technology: 49,
    Energy: 112,
  },
  {
    name: "Aug",
    Retail: 50,
    Manufacturing: 47,
    Technology: 52,
    Energy: 110,
  },
  {
    name: "Sep",
    Retail: 52,
    Manufacturing: 48,
    Technology: 55,
    Energy: 108,
  },
  {
    name: "Oct",
    Retail: 48,
    Manufacturing: 49,
    Technology: 58,
    Energy: 112,
  },
  {
    name: "Nov",
    Retail: 45,
    Manufacturing: 50,
    Technology: 60,
    Energy: 115,
  },
  {
    name: "Dec",
    Retail: 52,
    Manufacturing: 49,
    Technology: 62,
    Energy: 112,
  },
]

export function HistoricalTrends() {
  return (
    <div className="h-[300px] w-full">
      <ChartContainer data={data}>
        <ChartAxisOptions xAxis={[{ scaleId: "x", label: "Month" }]} yAxis={[{ scaleId: "y", label: "Index Value" }]} />
        <ChartLegend />
        <ChartTooltip>
          <ChartTooltipContent />
        </ChartTooltip>
        <ChartArea>
          <ChartLine
            scaleX={{ scaleId: "x", accessor: "name" }}
            scaleY={{ scaleId: "y", accessor: "Retail" }}
            name="Retail"
            type="natural"
            color="#10b981"
          />
          <ChartLine
            scaleX={{ scaleId: "x", accessor: "name" }}
            scaleY={{ scaleId: "y", accessor: "Manufacturing" }}
            name="Manufacturing"
            type="natural"
            color="#f59e0b"
          />
          <ChartLine
            scaleX={{ scaleId: "x", accessor: "name" }}
            scaleY={{ scaleId: "y", accessor: "Technology" }}
            name="Technology"
            type="natural"
            color="#3b82f6"
          />
          <ChartLine
            scaleX={{ scaleId: "x", accessor: "name" }}
            scaleY={{ scaleId: "y", accessor: "Energy" }}
            name="Energy"
            type="natural"
            color="#ef4444"
          />
        </ChartArea>
      </ChartContainer>
    </div>
  )
}

