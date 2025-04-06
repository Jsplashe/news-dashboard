"use client"

import { useState } from "react"
import { BarChart3, Bell, ChevronDown, Code2, FileText, Home, Menu, Search, Settings, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

import { MetricCard } from "@/components/metric-card"
import { HistoricalTrends } from "@/components/historical-trends"
import { SectorCard } from "@/components/sector-card"
import { AlertsList } from "@/components/alerts-list"
import { HistoricalInsight } from "@/components/historical-insight"
import { NewsItem } from "@/components/news-item"

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar className="border-r">
          <SidebarHeader className="flex items-center px-4 py-2">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">EconTracker</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={activeTab === "dashboard"}
                      onClick={() => setActiveTab("dashboard")}
                    >
                      <a href="#" className="flex items-center">
                        <Home className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      asChild
                      isActive={activeTab === "sectors"}
                      onClick={() => setActiveTab("sectors")}
                    >
                      <a href="#" className="flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        <span>Sector Reports</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#" className="flex items-center">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        <span>Economic Indicators</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={activeTab === "alerts"} onClick={() => setActiveTab("alerts")}>
                      <a href="#" className="flex items-center">
                        <Bell className="mr-2 h-4 w-4" />
                        <span>Alerts</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={activeTab === "news"} onClick={() => setActiveTab("news")}>
                      <a href="#" className="flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        <span>News Feed</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#" className="flex items-center">
                        <Code2 className="mr-2 h-4 w-4" />
                        <span>API Access</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="#" className="flex items-center">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <div className="flex flex-col flex-1">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger className="hidden md:flex" />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search indicators, sectors, reports..."
                    className="w-full rounded-lg bg-background pl-8 md:w-[300px] lg:w-[400px]"
                  />
                </div>
              </form>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  5
                </span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 rounded-full" size="sm">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline-flex">Jane Smith</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                  <DropdownMenuItem>API Keys</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>

          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-background md:hidden">
              <div className="flex h-16 items-center justify-between border-b px-6">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold">EconTracker</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="grid gap-2 p-6">
                <a
                  href="#"
                  className={`flex items-center rounded-lg px-4 py-2 ${activeTab === "dashboard" ? "bg-primary/10 text-primary" : "hover:bg-accent"}`}
                  onClick={() => {
                    setActiveTab("dashboard")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <Home className="mr-2 h-5 w-5" />
                  <span>Dashboard</span>
                </a>
                <a
                  href="#"
                  className={`flex items-center rounded-lg px-4 py-2 ${activeTab === "sectors" ? "bg-primary/10 text-primary" : "hover:bg-accent"}`}
                  onClick={() => {
                    setActiveTab("sectors")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  <span>Sector Reports</span>
                </a>
                <a href="#" className="flex items-center rounded-lg px-4 py-2 hover:bg-accent">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  <span>Economic Indicators</span>
                </a>
                <a
                  href="#"
                  className={`flex items-center rounded-lg px-4 py-2 ${activeTab === "alerts" ? "bg-primary/10 text-primary" : "hover:bg-accent"}`}
                  onClick={() => {
                    setActiveTab("alerts")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <Bell className="mr-2 h-5 w-5" />
                  <span>Alerts</span>
                </a>
                <a
                  href="#"
                  className={`flex items-center rounded-lg px-4 py-2 ${activeTab === "news" ? "bg-primary/10 text-primary" : "hover:bg-accent"}`}
                  onClick={() => {
                    setActiveTab("news")
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  <span>News Feed</span>
                </a>
                <a href="#" className="flex items-center rounded-lg px-4 py-2 hover:bg-accent">
                  <Code2 className="mr-2 h-5 w-5" />
                  <span>API Access</span>
                </a>
                <a href="#" className="flex items-center rounded-lg px-4 py-2 hover:bg-accent">
                  <Settings className="mr-2 h-5 w-5" />
                  <span>Settings</span>
                </a>
              </nav>
            </div>
          )}

          <main className="flex-1 p-6">
            {activeTab === "dashboard" && (
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl font-bold tracking-tight">Sector Performance Dashboard</h1>
                  <p className="text-muted-foreground">Track economic indicators across different sectors</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <MetricCard
                    title="Retail Sales Index"
                    value="+2.3%"
                    change="+0.4%"
                    trend="up"
                    chartData={[35, 41, 36, 26, 45, 48, 52]}
                    sector="Retail"
                    sectorColor="bg-green-500"
                  />
                  <MetricCard
                    title="Manufacturing PMI"
                    value="48.7"
                    change="-1.2"
                    trend="down"
                    chartData={[52, 49, 50, 51, 49, 50, 48.7]}
                    sector="Manufacturing"
                    sectorColor="bg-amber-500"
                  />
                  <MetricCard
                    title="Tech Sector Growth"
                    value="+5.8%"
                    change="+1.3%"
                    trend="up"
                    chartData={[28, 32, 39, 41, 38, 42, 45]}
                    sector="Tech"
                    sectorColor="bg-blue-500"
                  />
                  <MetricCard
                    title="Energy Price Index"
                    value="112.4"
                    change="-2.1"
                    trend="down"
                    chartData={[120, 118, 122, 125, 119, 115, 112]}
                    sector="Energy"
                    sectorColor="bg-red-500"
                  />
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <Card className="col-span-full md:col-span-2">
                    <CardHeader>
                      <CardTitle>Historical Trends</CardTitle>
                      <CardDescription>Sector performance over the last 12 months</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <HistoricalTrends />
                    </CardContent>
                  </Card>
                  <Card className="col-span-full md:col-span-1">
                    <CardHeader>
                      <CardTitle>Historical Insights</CardTitle>
                      <CardDescription>Similar past events and market reactions</CardDescription>
                    </CardHeader>
                    <CardContent className="p-3">
                      <div className="space-y-3">
                        <HistoricalInsight
                          title="PMI Fall in Q2 2022"
                          date="June 2022"
                          marketReaction="Negative"
                          impactDuration="3 weeks"
                          similarityScore={92}
                          marketChange="SPX -1.4%"
                        />
                        <HistoricalInsight
                          title="Tech Sector Layoffs 2023"
                          date="February 2023"
                          marketReaction="Mixed"
                          impactDuration="2 weeks"
                          similarityScore={78}
                          marketChange="NASDAQ -0.8%"
                        />
                        <HistoricalInsight
                          title="Rate Hike Cycle 2022"
                          date="March 2022"
                          marketReaction="Negative"
                          impactDuration="6 months"
                          similarityScore={85}
                          marketChange="DOW -2.1%"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "sectors" && (
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl font-bold tracking-tight">Sector Reports</h1>
                  <p className="text-muted-foreground">Detailed analysis and data for major economic sectors</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <SectorCard
                    title="Energy"
                    color="bg-red-500"
                    dataPoints={[
                      { label: "Production Index", value: "103.2" },
                      { label: "Price Volatility", value: "High" },
                      { label: "YoY Growth", value: "-2.1%" },
                    ]}
                  />
                  <SectorCard
                    title="Technology"
                    color="bg-blue-500"
                    dataPoints={[
                      { label: "Innovation Index", value: "142.7" },
                      { label: "Investment Growth", value: "+12.3%" },
                      { label: "Employment Change", value: "+5.4%" },
                    ]}
                  />
                  <SectorCard
                    title="Retail"
                    color="bg-green-500"
                    dataPoints={[
                      { label: "Consumer Confidence", value: "98.3" },
                      { label: "Online Sales Growth", value: "+18.7%" },
                      { label: "Store Closures", value: "-3.2%" },
                    ]}
                  />
                  <SectorCard
                    title="Manufacturing"
                    color="bg-amber-500"
                    dataPoints={[
                      { label: "Production Output", value: "97.8" },
                      { label: "New Orders", value: "-1.5%" },
                      { label: "Capacity Utilization", value: "82.3%" },
                    ]}
                  />
                </div>
              </div>
            )}

            {activeTab === "alerts" && (
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl font-bold tracking-tight">Economic Alerts</h1>
                  <p className="text-muted-foreground">Important notifications about economic indicators and trends</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Alerts</CardTitle>
                    <CardDescription>Significant changes in economic indicators</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AlertsList />
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "news" && (
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl font-bold tracking-tight">News Feed</h1>
                  <p className="text-muted-foreground">Latest news with AI-assigned impact scores</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Latest News</CardTitle>
                    <CardDescription>Financial and economic news with impact analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="all">
                      <TabsList className="mb-4">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="markets">Markets</TabsTrigger>
                        <TabsTrigger value="tech">Tech</TabsTrigger>
                        <TabsTrigger value="politics">Politics</TabsTrigger>
                        <TabsTrigger value="energy">Energy</TabsTrigger>
                      </TabsList>
                      <TabsContent value="all">
                        <ScrollArea className="h-[400px]">
                          <div className="space-y-4">
                            <NewsItem
                              title="Fed signals potential rate cuts in upcoming meeting"
                              source="Financial Times"
                              time="10 minutes ago"
                              category="Markets"
                              categoryColor="bg-blue-500"
                              impactScore={8.7}
                            />
                            <NewsItem
                              title="Major tech company announces AI breakthrough"
                              source="Tech Insider"
                              time="32 minutes ago"
                              category="Tech"
                              categoryColor="bg-purple-500"
                              impactScore={7.2}
                            />
                            <NewsItem
                              title="Oil prices surge amid Middle East tensions"
                              source="Reuters"
                              time="1 hour ago"
                              category="Energy"
                              categoryColor="bg-amber-500"
                              impactScore={8.9}
                            />
                            <NewsItem
                              title="European Union announces new trade agreement with Asian markets"
                              source="Bloomberg"
                              time="2 hours ago"
                              category="Politics"
                              categoryColor="bg-red-500"
                              impactScore={6.5}
                            />
                            <NewsItem
                              title="Major bank reports better than expected quarterly earnings"
                              source="Wall Street Journal"
                              time="3 hours ago"
                              category="Markets"
                              categoryColor="bg-blue-500"
                              impactScore={5.8}
                            />
                            <NewsItem
                              title="Semiconductor shortage expected to ease by Q3"
                              source="Industry Weekly"
                              time="4 hours ago"
                              category="Tech"
                              categoryColor="bg-purple-500"
                              impactScore={4.3}
                            />
                          </div>
                        </ScrollArea>
                      </TabsContent>
                      <TabsContent value="markets">
                        <ScrollArea className="h-[400px]">
                          <div className="space-y-4">
                            <NewsItem
                              title="Fed signals potential rate cuts in upcoming meeting"
                              source="Financial Times"
                              time="10 minutes ago"
                              category="Markets"
                              categoryColor="bg-blue-500"
                              impactScore={8.7}
                            />
                            <NewsItem
                              title="Major bank reports better than expected quarterly earnings"
                              source="Wall Street Journal"
                              time="3 hours ago"
                              category="Markets"
                              categoryColor="bg-blue-500"
                              impactScore={5.8}
                            />
                          </div>
                        </ScrollArea>
                      </TabsContent>
                      <TabsContent value="tech">
                        <ScrollArea className="h-[400px]">
                          <div className="space-y-4">
                            <NewsItem
                              title="Major tech company announces AI breakthrough"
                              source="Tech Insider"
                              time="32 minutes ago"
                              category="Tech"
                              categoryColor="bg-purple-500"
                              impactScore={7.2}
                            />
                            <NewsItem
                              title="Semiconductor shortage expected to ease by Q3"
                              source="Industry Weekly"
                              time="4 hours ago"
                              category="Tech"
                              categoryColor="bg-purple-500"
                              impactScore={4.3}
                            />
                          </div>
                        </ScrollArea>
                      </TabsContent>
                      <TabsContent value="politics">
                        <ScrollArea className="h-[400px]">
                          <div className="space-y-4">
                            <NewsItem
                              title="European Union announces new trade agreement with Asian markets"
                              source="Bloomberg"
                              time="2 hours ago"
                              category="Politics"
                              categoryColor="bg-red-500"
                              impactScore={6.5}
                            />
                          </div>
                        </ScrollArea>
                      </TabsContent>
                      <TabsContent value="energy">
                        <ScrollArea className="h-[400px]">
                          <div className="space-y-4">
                            <NewsItem
                              title="Oil prices surge amid Middle East tensions"
                              source="Reuters"
                              time="1 hour ago"
                              category="Energy"
                              categoryColor="bg-amber-500"
                              impactScore={8.9}
                            />
                          </div>
                        </ScrollArea>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

