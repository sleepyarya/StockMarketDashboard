import { Share2, TrendingUp, TrendingDown } from "lucide-react";

export const stockData = [
    {
        symbol: "AAPL",
        name: "Apple Inc.",
        price: 185.92,
        change: 1.25,
        changePercent: 0.68,
        volume: "52.4M",
        marketCap: "2.89T",
        trend: "up",
        history: Array.from({ length: 30 }, (_, i) => ({
            date: `2024-01-${i + 1}`,
            value: 180 + Math.random() * 10 - 5,
        })),
    },
    {
        symbol: "TSLA",
        name: "Tesla, Inc.",
        price: 245.45,
        change: -3.20,
        changePercent: -1.29,
        volume: "105.1M",
        marketCap: "780.4B",
        trend: "down",
        history: Array.from({ length: 30 }, (_, i) => ({
            date: `2024-01-${i + 1}`,
            value: 240 + Math.random() * 20 - 10,
        })),
    },
    {
        symbol: "MSFT",
        name: "Microsoft Corp.",
        price: 375.20,
        change: 2.10,
        changePercent: 0.56,
        volume: "22.8M",
        marketCap: "2.79T",
        trend: "up",
        history: Array.from({ length: 30 }, (_, i) => ({
            date: `2024-01-${i + 1}`,
            value: 370 + Math.random() * 15 - 7,
        })),
    },
    {
        symbol: "NVDA",
        name: "NVIDIA Corp.",
        price: 550.10,
        change: 12.40,
        changePercent: 2.30,
        volume: "45.1M",
        marketCap: "1.35T",
        trend: "up",
        history: Array.from({ length: 30 }, (_, i) => ({
            date: `2024-01-${i + 1}`,
            value: 540 + Math.random() * 25 - 5,
        })),
    },
];

export const portfolioStats = {
    totalValue: 124592.50,
    dayChange: 1250.20,
    dayChangePercent: 1.01,
    availableCash: 15400.00,
};

export const transactions = [
    { id: 1, type: "Buy", symbol: "AAPL", shares: 10, price: 182.50, date: "2024-01-28", status: "Completed" },
    { id: 2, type: "Sell", symbol: "TSLA", shares: 5, price: 248.00, date: "2024-01-27", status: "Completed" },
    { id: 3, type: "Deposit", symbol: "-", amount: 5000, date: "2024-01-25", status: "Completed" },
    { id: 4, type: "Buy", symbol: "NVDA", shares: 2, price: 545.20, date: "2024-01-24", status: "Completed" },
];
