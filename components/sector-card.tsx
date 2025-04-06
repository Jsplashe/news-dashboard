import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface DataPoint {
  label: string
  value: string
}

interface SectorCardProps {
  title: string
  color: string
  dataPoints: DataPoint[]
}

export function SectorCard({ title, color, dataPoints }: SectorCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title} Sector</h3>
          <Badge className={`${color} text-white hover:${color}`}>{title}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {dataPoints.map((point, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{point.label}</span>
              <span className="font-medium">{point.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <span>View Sector Report</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

