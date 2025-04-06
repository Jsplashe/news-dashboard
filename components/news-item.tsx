import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface NewsItemProps {
  title: string
  source: string
  time: string
  category: string
  categoryColor: string
  impactScore: number
}

export function NewsItem({ title, source, time, category, categoryColor, impactScore }: NewsItemProps) {
  // Determine impact level and color based on score
  const getImpactDetails = (score: number) => {
    if (score >= 8) {
      return { level: "High", color: "bg-red-500 hover:bg-red-600" }
    } else if (score >= 6) {
      return { level: "Medium", color: "bg-amber-500 hover:bg-amber-600" }
    } else {
      return { level: "Low", color: "bg-green-500 hover:bg-green-600" }
    }
  }

  const { level, color } = getImpactDetails(impactScore)

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex flex-col space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-medium pr-2">{title}</h3>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Badge className={`${color} text-white shrink-0`}>Impact: {level}</Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Impact score is AI-estimated</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <span>{source}</span>
              <span>•</span>
              <span>{time}</span>
            </div>
            <Badge className={`${categoryColor} text-white hover:${categoryColor}`}>{category}</Badge>
          </div>
          <div className="flex items-center pt-1 text-xs text-primary">
            <ExternalLink className="mr-1 h-3 w-3" />
            <span>Read full story</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

