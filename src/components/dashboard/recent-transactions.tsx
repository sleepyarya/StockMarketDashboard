import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { transactions } from "@/lib/data"

export function RecentTransactions() {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Shares</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {transactions.map((t) => (
                    <TableRow key={t.id}>
                        <TableCell className="font-medium">{t.type}</TableCell>
                        <TableCell>{t.symbol}</TableCell>
                        <TableCell>{t.shares || "-"}</TableCell>
                        <TableCell>${t.price?.toFixed(2) || "-"}</TableCell>
                        <TableCell>{t.date}</TableCell>
                        <TableCell className="text-right">
                            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                {t.status}
                            </span>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
