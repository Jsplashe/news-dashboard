import { TrendingUp, TrendingDown, Minus, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface HistoricalInsightProps {
  title: string
  date: string
  marketReaction: "Positive" | "Negative" | "Mixed"
  impactDuration: string
  similarityScore: number
  marketChange?: string
}

export function HistoricalInsight({
  title,
  date,
  marketReaction,
  impactDuration,
  similarityScore,
  marketChange,
}: HistoricalInsightProps) {
  // Determine reaction icon and color
  const getReactionDetails = (reaction: string) => {
    switch (reaction) {
      case "Positive":
        return {
          icon: TrendingUp,
          color: "text-green-500",
          bgColor: "bg-green-500/10",
          borderColor: "border-green-500/20",
        }
      case "Negative":
        return {
          icon: TrendingDown,
          color: "text-red-500",
          bgColor: "bg-red-500/10",
          borderColor: "border-red-500/20",
        }
      case "Mixed":
        return {
          icon: Minus,
          color: "text-amber-500",
          bgColor: "bg-amber-500/10",
          borderColor: "border-amber-500/20",
        }
      default:
        return {
          icon: Minus,
          color: "text-muted-foreground",
          bgColor: "bg-muted/50",
          borderColor: "border-muted",
        }
    }
  }

  const { icon: ReactionIcon, color, bgColor, borderColor } = getReactionDetails(marketReaction)

  // Get similarity score color
  const getSimilarityColor = (score: number) => {
    if (score >= 90) return "bg-green-500"
    if (score >= 70) return "bg-blue-500"
    return "bg-amber-500"
  }

  return (
    <Card className={cn("overflow-hidden transition-all duration-200 hover:shadow-md", bgColor, borderColor)}>
      <CardContent className="p-4">
        <div className="flex flex-col space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="font-medium">{title}</h3>
            <Badge variant="outline" className="text-xs font-normal">
              {date}
            </Badge>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Similarity</span>
              <span className="font-medium">{similarityScore}%</span>
            </div>
            <Progress
              value={similarityScore}
              className="h-1.5"
              indicatorClassName={getSimilarityColor(similarityScore)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-muted-foreground">Market Reaction:</span>
              <span className={`flex items-center ${color}`}>
                <ReactionIcon className="mr-1 h-4 w-4" />
                {marketReaction}
              </span>
            </div>

            {marketChange && (
              <Badge variant={marketReaction === "Positive" ? "default" : "destructive"} className="text-xs">
                {marketChange}
              </Badge>
            )}
          </div>

          <div className="text-sm">
            <span className="text-muted-foreground">Impact Duration: </span>
            <span className="font-medium">{impactDuration}</span>
          </div>

          <Button variant="ghost" size="sm" className="w-full mt-2 text-xs justify-between">
            <span>View full event</span>
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

