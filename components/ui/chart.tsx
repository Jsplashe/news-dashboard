"use client"

import type React from "react"
import { XAxis, YAxis, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from "recharts"

interface ChartProps {
  data: any[]
  xAxisKey?: string
  yAxisKey?: string
  children: React.ReactNode
}

export const ChartContainer = ({ data, children }: { data: any[]; children: React.ReactNode }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>{children}</LineChart>
    </ResponsiveContainer>
  )
}

interface ChartAxisOptionsProps {
  xAxis?: any[]
  yAxis?: any[]
}

export const ChartAxisOptions = ({ xAxis, yAxis }: ChartAxisOptionsProps) => {
  return (
    <>
      {xAxis?.map((axis, index) => (
        <XAxis key={`x-axis-${index}`} dataKey={axis.scaleId === "x" ? "name" : ""} label={axis.label} />
      ))}
      {yAxis?.map((axis, index) => (
        <YAxis key={`y-axis-${index}`} dataKey={axis.scaleId === "y" ? "value" : ""} label={axis.label} />
      ))}
    </>
  )
}

export const ChartLegend = () => {
  return <Legend />
}

export const ChartTooltip = ({ children }: { children?: React.ReactNode }) => {
  return <Tooltip content={<ChartTooltipContent />} />
}

interface ChartTooltipContentProps {
  active?: boolean
  payload?: any[]
  label?: string
}

export const ChartTooltipContent = ({ active, payload, label }: ChartTooltipContentProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md border bg-secondary p-2 text-sm text-secondary-foreground">
        <p className="font-bold">{`${label}`}</p>
        {payload.map((item, index) => (
          <p key={`tooltip-item-${index}`} className="text-muted-foreground">
            {`${item.name}: ${item.value}`}
          </p>
        ))}
      </div>
    )
  }

  return null
}

interface ChartLineProps {
  scaleX: any
  scaleY: any
  name: string
  type: string
  color: string
}

export const ChartLine = ({ scaleX, scaleY, name, type, color }: ChartLineProps) => {
  return <Line type={type} dataKey={scaleY.accessor} stroke={color} name={name} dot={false} />
}

export const ChartArea = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export const Chart = () => {
  return null
}

