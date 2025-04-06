import { AlertCircle, Bell, BellOff, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Alert {
  id: number
  title: string
  trigger: string
  time: string
  priority: "high" | "medium" | "low"
  isRead: boolean
}

const alerts: Alert[] = [
  {
    id: 1,
    title: "Oil price surge exceeds threshold",
    trigger: "Price > $90/barrel",
    time: "10 minutes ago",
    priority: "high",
    isRead: false,
  },
  {
    id: 2,
    title: "Fed rate cut announcement",
    trigger: "Keyword match: rate cut",
    time: "32 minutes ago",
    priority: "high",
    isRead: false,
  },
  {
    id: 3,
    title: "Tech sector volatility increased",
    trigger: "Volatility > 25%",
    time: "1 hour ago",
    priority: "medium",
    isRead: true,
  },
  {
    id: 4,
    title: "EU market opening gap",
    trigger: "Gap > 1.5%",
    time: "3 hours ago",
    priority: "low",
    isRead: true,
  },
]

export function AlertBox() {
  // Get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-500"
      case "medium":
        return "text-amber-500"
      case "low":
        return "text-green-500"
      default:
        return "text-muted-foreground"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Active Alerts</span>
        <Button variant="outline" size="sm" className="h-8 gap-1">
          <Bell className="h-3.5 w-3.5" />
          <span className="text-xs">Manage</span>
        </Button>
      </div>

      <ScrollArea className="h-[300px]">
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className={`rounded-lg border p-3 ${!alert.isRead ? "bg-muted/50" : ""}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-2">
                  {!alert.isRead && <AlertCircle className={`h-4 w-4 mt-0.5 ${getPriorityColor(alert.priority)}`} />}
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{alert.title}</p>
                    <p className="text-xs text-muted-foreground">{alert.trigger}</p>
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  {alert.isRead ? (
                    <Check className="h-3.5 w-3.5 text-muted-foreground" />
                  ) : (
                    <BellOff className="h-3.5 w-3.5 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

