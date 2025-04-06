import { ArrowDown, ArrowUp } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface MetricCardProps {
  title: string
  value: string
  change: string
  trend: "up" | "down" | "neutral"
  chartData: number[]
  sector: string
  sectorColor: string
  comparisonLabel?: string
}

export function MetricCard({
  title,
  value,
  change,
  trend,
  chartData,
  sector,
  sectorColor,
  comparisonLabel = "vs. last month",
}: MetricCardProps) {
  // Determine trend color and icon
  const getTrendDetails = () => {
    switch (trend) {
      case "up":
        return { color: "text-green-500", icon: ArrowUp }
      case "down":
        return { color: "text-red-500", icon: ArrowDown }
      default:
        return { color: "text-muted-foreground", icon: null }
    }
  }

  const { color, icon: TrendIcon } = getTrendDetails()

  // Simple sparkline chart
  const max = Math.max(...chartData)
  const min = Math.min(...chartData)
  const range = max - min

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
      <CardHeader className="pb-2 pt-4 relative">
        <Badge className={`${sectorColor} text-white absolute -top-1 left-4`}>{sector}</Badge>
        <div className="mt-4 text-sm font-medium text-muted-foreground">{title}</div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-bold">{value}</div>

          {/* Simple sparkline chart */}
          <div className="h-12">
            <svg width="100%" height="100%" viewBox="0 0 100 30">
              <polyline
                fill="none"
                stroke={trend === "up" ? "#10b981" : "#ef4444"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                points={chartData
                  .map((value, index) => {
                    const x = (index / (chartData.length - 1)) * 100
                    const y = 30 - ((value - min) / range) * 25
                    return `${x},${y}`
                  })
                  .join(" ")}
              />
            </svg>
          </div>

          <div className="flex items-center text-sm">
            <span className="text-muted-foreground">{comparisonLabel}: </span>
            <span className={`ml-1 flex items-center ${color}`}>
              {TrendIcon && <TrendIcon className="mr-1 h-3 w-3" />}
              <span>{change}</span>
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

