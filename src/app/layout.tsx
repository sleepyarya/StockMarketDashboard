import type { Metadata } from "next";
import { Inter } from "next/font/google"; // If using Outfit, I should install it, but Inter is fine. 
// Actually, system prompt suggested Google Fonts like Inter, Roboto, or Outfit.
// I'll stick to Inter for now as it's already installed.
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Stock Market Dashboard",
    description: "Advanced financial analytics platform",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.className} min-h-screen bg-background font-sans antialiased selection:bg-primary/20`}>
                <div className="flex min-h-screen w-full">
                    <Sidebar />
                    <div className="flex flex-col flex-1 lg:pl-64 transition-all duration-300">
                        <Header />
                        <main className="flex-1 overflow-y-auto bg-muted/20 p-6">
                            {children}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    );
}
