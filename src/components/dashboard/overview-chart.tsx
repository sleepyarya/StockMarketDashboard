"use client"

import { ResponsiveContainer, Tooltip, XAxis, YAxis, Area, AreaChart, CartesianGrid } from "recharts"

const data = [
    { name: "Jan", total: 120000 },
    { name: "Feb", total: 124000 },
    { name: "Mar", total: 118000 },
    { name: "Apr", total: 145000 },
    { name: "May", total: 135000 },
    { name: "Jun", total: 152000 },
    { name: "Jul", total: 160000 },
    { name: "Aug", total: 158000 },
    { name: "Sep", total: 165000 },
    { name: "Oct", total: 172000 },
    { name: "Nov", total: 180000 },
    { name: "Dec", total: 195000 },
]

export function OverviewChart() {
    return (
        <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value / 1000}k`}
                />
                <Tooltip
                    contentStyle={{ backgroundColor: "#1e1e1e", borderColor: "#333", borderRadius: "8px" }}
                    itemStyle={{ color: "#fff" }}
                />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                <Area
                    type="monotone"
                    dataKey="total"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorTotal)"
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}
