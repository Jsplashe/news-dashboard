import { CheckCircle2 } from "lucide-react"

export function EconomicInsights() {
  const insights = [
    "Retail sales showing strong recovery with 2.3% growth, driven primarily by e-commerce expansion",
    "Manufacturing PMI below 50 indicates contraction, with new orders declining for the second consecutive month",
    "Technology sector continues to outperform with 5.8% growth, led by software and cloud services",
    "Energy prices declining due to increased supply and moderate winter demand",
    "Consumer confidence index improved by 2.1 points, suggesting potential increased spending in Q2",
  ]

  return (
    <div className="space-y-4">
      <ul className="space-y-3">
        {insights.map((insight, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
            <span className="text-sm">{insight}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

