import Link from "next/link";
import { LayoutDashboard, PieChart, TrendingUp, Newspaper, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/" },
    { icon: PieChart, label: "Portfolio", href: "/portfolio" },
    { icon: TrendingUp, label: "Market", href: "/market" },
    { icon: Newspaper, label: "News", href: "/news" },
    { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden lg:block">
            <div className="flex h-16 items-center px-6 border-b">
                <TrendingUp className="h-6 w-6 text-primary mr-2" />
                <span className="text-xl font-bold tracking-tight">TradeDash</span>
            </div>
            <div className="py-4">
                <nav className="space-y-1 px-2">
                    {sidebarItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors",
                                item.href === "/"
                                    ? "bg-primary/10 text-primary"
                                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                        >
                            <item.icon className="mr-3 h-5 w-5" />
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
            <div className="absolute bottom-4 left-0 w-full px-2">
                <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
                    <LogOut className="mr-3 h-5 w-5" />
                    Logout
                </Button>
            </div>
        </aside>
    );
}
