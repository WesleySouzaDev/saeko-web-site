import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/sidebar/app-sidebar";
import Header from "@/components/header";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Saeko Street",
	description: "Home of Saeko Store",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<>
			<html lang="pt-br" suppressHydrationWarning>
				<body
					className={`${(geistSans.className, geistMono.variable)} antialiased`}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<SidebarProvider>
							<AppSidebar />
							<div className="flex flex-col w-full">
								<Header />
								<SidebarInset>{children}</SidebarInset>
							</div>
						</SidebarProvider>
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
