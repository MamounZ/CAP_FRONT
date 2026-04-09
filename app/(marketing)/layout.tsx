"use client"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from 'lucide-react';
import { useState} from "react";
import { useRouter } from 'next/navigation';
import ColoredButton from "@/components/ColoredButton";
import BorderedButton from "@/components/BorderedButton";

type LayoutProps = {
	children: React.ReactNode
}

export default function MarketingLayout({children}: LayoutProps){
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
	const router = useRouter();

	return (
		<div className="min-h-screen bg-black text-white flex flex-col" >
			<div className={`fixed inset-0 z-100 lg:hidden ${isMobileSidebarOpen ? "block" : "hidden"}`}>
				<button className="absolute inset-0 bg-black/50" onClick={() => setIsMobileSidebarOpen(false)}/>
				<div className="absolute top-0 left-0 min-h-full w-80 border-r border-cyan-500/50 bg-black">
					<div className="m-8 flex items-start justify-between">
						<div>
							<p className="text-2xl text-cyan-600">CAP</p>
							<p className="mt-2 text-gray-500 ">CODE AGENT PLATFORM</p>
						</div>
						<button onClick={() => setIsMobileSidebarOpen(false)}>
							<X className="w-7 h-7 text-gray-500 " />
						</button>
					</div>
					<div className="border-t border-cyan-600" />
					<div className="flex flex-col mt-4 mx-8 gap-2">
						<a href="/#home" onClick={() => setIsMobileSidebarOpen(false)} className="p-4 rounded-lg text-gray-500">
								Home
							</a>
							<a href="/#features" onClick={() => setIsMobileSidebarOpen(false)} className="p-4 rounded-lg text-gray-500">
								Features
							</a>
							<a href="/#demo" onClick={() => setIsMobileSidebarOpen(false)} className="p-4 rounded-lg text-gray-500">
								Demo
							</a>
							<a href="/docs" onClick={() => setIsMobileSidebarOpen(false)} className="p-4 rounded-lg text-gray-500">
								Docs
						</a>
					</div>
				</div>
			</div>
			<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
				<nav>
					<div className="mx-auto max-w-7xl px-6 py-4">
						<div className="flex items-center justify-between">
							<div className=" flex items-center md:gap-8">
								<button onClick={() => setIsMobileSidebarOpen(true)} className="md:hidden">
									<Menu className="w-4 h-4"/>
								</button>
								<Image src="/assets/CAPLogo.png" alt="logo" width={60} height={60} loading="eager" className="drop-shadow-[0_0_12px_rgba(34,211,238,0.55)] w-auto h-auto"/>
								<div className="hidden md:flex items-center gap-8">
									<a href="/#home" className="text-sm text-gray-300 hover:text-white transition-colors">
										Home
									</a>
									<a href="/#features" className="text-sm text-gray-300 hover:text-white transition-colors">
										Features
									</a>
									<a href="/#demo" className="text-sm text-gray-300 hover:text-white transition-colors">
										Demo
									</a>
									<a href="/docs" className="text-sm text-gray-300 hover:text-white transition-colors">
										Docs
									</a>
								</div>
							</div>
							<div className="flex items-center gap-4" >
								<BorderedButton onClick={() => router.push("/auth/login")}>Sign In</BorderedButton>
								<ColoredButton onClick={() => router.push("/auth/AccountTypeSelector")}>Start Free</ColoredButton>
							</div>
						</div>
					</div>
				</nav>
			</header>

			<main className="flex-1">
				{children}
			</main>

			<footer className="w-full border-t border-white/10 flex justify-center">
				<div className="mx-auto w-full max-w-7xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-sm text-gray-400">
						© 2026 CAP. All rights reserved.
					</p>
					<div className="flex items-center gap-6 text-sm">
						<Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
							Terms of Service
						</Link>
						<Link href="/PrivacyPolicy" className="text-gray-400 hover:text-white transition-colors">
							Privacy Policy
						</Link>
					</div>
				</div>
			</footer>
		</div>
	)
}
