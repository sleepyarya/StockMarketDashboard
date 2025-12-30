import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { stockData } from "@/lib/data"
import { ArrowUp, ArrowDown } from "lucide-react"

export function WatchList() {
    return (
        <div className="space-y-6">
            {stockData.map((stock) => (
                <div key={stock.symbol} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-9 w-9 bg-primary/20 text-primary">
                            <AvatarFallback>{stock.symbol.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium leading-none">{stock.symbol}</p>
                            <p className="text-sm text-muted-foreground">{stock.name}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="font-medium">${stock.price.toFixed(2)}</div>
                        <div className={`text-xs flex items-center ${stock.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                            {stock.trend === 'up' ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                            {stock.changePercent}%
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
