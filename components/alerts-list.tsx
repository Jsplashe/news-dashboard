"use client"

import { useState } from "react"
import { AlertCircle, ArrowDown, ArrowUp, ChevronDown, ChevronRight, Clock, Info } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface Alert {
  id: number
  title: string
  severity: "high" | "medium" | "low"
  time: string
  trend?: "up" | "down"
  value?: string
  sector: string
  sectorColor: string
  summary: string
}

const alerts: Alert[] = [
  {
    id: 1,
    title: "US Unemployment Rises 0.3%",
    severity: "high",
    time: "2 hours ago",
    trend: "up",
    value: "0.3%",
    sector: "US Markets",
    sectorColor: "bg-blue-500",
    summary: "Unemployment rate exceeds expectations, potentially impacting Fed policy decisions.",
  },
  {
    id: 2,
    title: "China's Manufacturing PMI Falls Below 50",
    severity: "high",
    time: "5 hours ago",
    trend: "down",
    value: "49.2",
    sector: "Asia Markets",
    sectorColor: "bg-red-500",
    summary: "Manufacturing contraction signals economic slowdown in world's second-largest economy.",
  },
  {
    id: 3,
    title: "EU Inflation Rate Exceeds Target",
    severity: "medium",
    time: "Yesterday",
    trend: "up",
    value: "3.2%",
    sector: "Europe",
    sectorColor: "bg-amber-500",
    summary: "ECB may consider additional rate hikes as inflation remains above 2% target.",
  },
  {
    id: 4,
    title: "Tech Sector Layoffs Increase",
    severity: "medium",
    time: "2 days ago",
    sector: "Technology",
    sectorColor: "bg-purple-500",
    summary: "Major tech companies announce cost-cutting measures amid economic uncertainty.",
  },
  {
    id: 5,
    title: "Oil Price Volatility Alert",
    severity: "low",
    time: "3 days ago",
    sector: "Energy",
    sectorColor: "bg-green-500",
    summary: "OPEC+ production decisions and geopolitical tensions create market uncertainty.",
  },
]

export function AlertsList() {
  const [expandedAlerts, setExpandedAlerts] = useState<number[]>([])

  const toggleExpand = (id: number) => {
    setExpandedAlerts((prev) => (prev.includes(id) ? prev.filter((alertId) => alertId !== id) : [...prev, id]))
  }

  // Get severity details
  const getSeverityDetails = (severity: string) => {
    switch (severity) {
      case "high":
        return {
          icon: AlertCircle,
          color: "border-red-500",
          bgColor: "bg-red-500/10",
          textColor: "text-red-500",
        }
      case "medium":
        return {
          icon: Info,
          color: "border-amber-500",
          bgColor: "bg-amber-500/10",
          textColor: "text-amber-500",
        }
      case "low":
        return {
          icon: Info,
          color: "border-blue-500",
          bgColor: "bg-blue-500/10",
          textColor: "text-blue-500",
        }
      default:
        return {
          icon: Info,
          color: "border-muted-foreground",
          bgColor: "bg-muted/50",
          textColor: "text-muted-foreground",
        }
    }
  }

  return (
    <div className="space-y-3">
      {alerts.map((alert) => {
        const { icon: SeverityIcon, color, bgColor, textColor } = getSeverityDetails(alert.severity)
        const isExpanded = expandedAlerts.includes(alert.id)

        return (
          <div
            key={alert.id}
            className={cn(
              "rounded-lg border transition-all duration-200 overflow-hidden",
              "hover:shadow-md cursor-pointer",
              `border-l-4 ${color}`,
            )}
            onClick={() => toggleExpand(alert.id)}
          >
            <div className={cn("p-3", isExpanded ? bgColor : "bg-card")}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <SeverityIcon className={`h-5 w-5 mt-0.5 ${textColor}`} />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium truncate pr-2">{alert.title}</h4>
                      {isExpanded ? (
                        <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                      )}
                    </div>

                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        {alert.time}
                      </div>

                      <Badge className={`${alert.sectorColor} text-white text-xs`}>{alert.sector}</Badge>

                      {alert.trend && (
                        <Badge variant={alert.trend === "up" ? "destructive" : "outline"} className="text-xs">
                          {alert.trend === "up" ? (
                            <ArrowUp className="mr-1 h-3 w-3" />
                          ) : (
                            <ArrowDown className="mr-1 h-3 w-3" />
                          )}
                          {alert.value}
                        </Badge>
                      )}
                    </div>

                    {isExpanded && <p className="text-sm text-muted-foreground mt-2">{alert.summary}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

