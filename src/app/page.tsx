import { portfolioStats } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowUp, DollarSign, Activity, CreditCard, Users } from "lucide-react";
import { OverviewChart } from "@/components/dashboard/overview-chart";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";
import { WatchList } from "@/components/dashboard/watch-list";

export default function Home() {
    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <div className="text-sm text-muted-foreground">Oct 24, 2024</div>
            </div>

            {/* Metrics */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Portfolio</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${portfolioStats.totalValue.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground flex items-center mt-1">
                            <span className="text-emerald-500 flex items-center mr-1">
                                <ArrowUp className="h-3 w-3 mr-0.5" />
                                {portfolioStats.dayChangePercent}%
                            </span>
                            from yesterday
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Day's Gain</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-emerald-500">+${portfolioStats.dayChange.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            +1.01% since last hour
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Available Cash</CardTitle>
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${portfolioStats.availableCash.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Ready to invest
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Positions</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            4 pending orders
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 lg:col-span-5">
                    <CardHeader>
                        <CardTitle>Portfolio Performance</CardTitle>
                        <CardDescription>Value over time</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <OverviewChart />
                    </CardContent>
                </Card>
                <Card className="col-span-3 lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Watchlist</CardTitle>
                        <CardDescription>Monitor your favorite stocks</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <WatchList />
                    </CardContent>
                </Card>
            </div>

            {/* Transactions */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                    <RecentTransactions />
                </CardContent>
            </Card>
        </div>
    );
}
