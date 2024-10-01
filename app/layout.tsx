import "./assets/globals.css";

import { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import { JetBrains_Mono } from "next/font/google";

import clsx from "clsx";
import { curriculum } from "@/app/components/utils";

const SaansFont = localFont({
	src: "./saans-font.woff2",
	display: "swap",
});

const JetBrainsMonoFont = JetBrains_Mono({
	display: "swap",
	variable: "--font-monospace",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Heytor Victor - Software Engineer",
	description: "Heytor Victor is a python software engineer.",
	openGraph: {
		title: "Heytor Victor - Software Engineer",
		images: [
			{
				url: "/og.png",
				width: 1200,
				height: 630,
				alt: "Heytor Victor - Software Engineer",
			},
		],
		siteName: "Heytor Victor - Software Engineer",
	},
	metadataBase: new URL("https://heytor.dev"),
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Heytor Victor",
	image: "https://heytor.dev/avatar.jpg",
	url: "https://heytor.dev",
	jobTitle: "Software Engineer",
	sameAs: [
		"https://www.github.com/heytorvas",
		"https://www.linkedin.com/in/heytorvictor/",
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body
				className={clsx(
					SaansFont.className,
					JetBrainsMonoFont.variable,
					"bg-slate-50",
				)}
			>
				<div className="max-w-2xl lg:max-w-xl mx-auto">
					<header className="pt-8 md:pt-16 pb-16 px-4 md:px-0 flex justify-between">
						<Link href="/">
							<h1 className="text-base-line-height font-mono font-semibold text-slate-950">
								hv
							</h1>
						</Link>
						<nav className="flex gap-4">
							<Link
								className="text-950 text-sm tracking-tighter font-mono font-semibold"
								href="/contact"
							>
								Contact
							</Link>
							<Link
								href={curriculum}
								target="_blank"
								className="group bg-slate-950 hover:bg-slate-800 transition-colors inline-block font-mono text-xs-line-height font-semibold rounded-full px-4 text-white"
							>
								Resume{" "}
								<span className="inline-block group-hover:translate-x-2 transition-transform">
									→
								</span>
							</Link>
						</nav>
					</header>
					{children}
					<footer className="px-4 md:px-0 border-t border-slate-200 py-8 text-slate-700 font-mono text-xs tracking-tight flex justify-between">
						<p>
							Copyright &copy; {new Date().getFullYear()} {"/"} All rights
							reserved.
						</p>
						<p>Heytor Victor</p>
					</footer>
				</div>
				<Analytics />
			</body>
		</html>
	);
}
