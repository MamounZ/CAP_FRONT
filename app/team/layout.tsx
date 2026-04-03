"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Bell, UserRound, Menu, X } from 'lucide-react';

type TeamLayoutProps = {
  children: React.ReactNode
}

export default function TeamLayout({ children }: TeamLayoutProps) {
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

	return (
		<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-900/50 px-4 py-10">
			<div className="absolute top-0 left-0 lg:left-80 right-0 border-b border-gray-500/50 bg-gray-900 py-4 px-6 lg:px-12">
				<div className="flex justify-between gap-8">
					<div className="flex flex-1 max-w-3xl items-center gap-4">
						<button onClick={() => setIsMobileSidebarOpen(true)} className="lg:hidden">
							<Menu className="w-8 h-8"/>
						</button>
						<Search className="w-8 h-8"/>
						<input placeholder="Search..." className="w-full h-12 p-4 bg-gray-800 rounded-lg"></input>
					</div>
					<div className="flex items-center gap-8">
						<Bell className="w-8 h-8" />
						<UserRound className="w-8 h-8"/>
					</div>
				</div>
			</div>

			<div className={`fixed inset-0 z-40 lg:hidden ${isMobileSidebarOpen ? "block" : "hidden"}`}>
				<button className="absolute inset-0 bg-black/50" onClick={() => setIsMobileSidebarOpen(false)}/>
				<div className="absolute top-0 left-0 min-h-full w-80 border-r border-gray-500/50 bg-gray-900">
					<div className="m-8 flex items-start justify-between">
						<div>
							<p className=" text-2xl">Team Hub</p>
							<p className="mt-2 text-gray-500">AI Code Review</p>
						</div>
						<button
							type="button"
							onClick={() => setIsMobileSidebarOpen(false)}
							aria-label="Close sidebar"
						>
							<X className="w-7 h-7" />
						</button>
					</div>
					<div className="border-t border-gray-500/50" />
					<div className="flex flex-col mt-4 mx-8 gap-2">
						<Link href="#placeHolder" onClick={() => setIsMobileSidebarOpen(false)} className="p-4 rounded-lg text-gray-400 hover:text-white hover:bg-gray-500/50">Dashboard</Link>
						<Link href="#placeHolder" onClick={() => setIsMobileSidebarOpen(false)} className="p-4 rounded-lg text-gray-400 hover:text-white hover:bg-gray-500/50">Members</Link>
						<Link href="#placeHolder" onClick={() => setIsMobileSidebarOpen(false)} className="p-4 rounded-lg text-gray-400 hover:text-white hover:bg-gray-500/50">Projects</Link>
						<Link href="#placeHolder" onClick={() => setIsMobileSidebarOpen(false)} className="p-4 rounded-lg text-gray-400 hover:text-white hover:bg-gray-500/50">Chat</Link>
						<Link href="#placeHolder" onClick={() => setIsMobileSidebarOpen(false)} className="p-4 rounded-lg text-gray-400 hover:text-white hover:bg-gray-500/50">Github</Link>
						<Link href="#placeHolder" onClick={() => setIsMobileSidebarOpen(false)} className="p-4 rounded-lg text-gray-400 hover:text-white hover:bg-gray-500/50">Settings</Link>
					</div>
				</div>
			</div>

			<div className="absolute top-0 left-0 min-h-full w-80 border-r border-gray-500/50 bg-gray-900 hidden lg:block">
				<div className="m-8">
					<p className=" text-2xl">Team Hub</p>
					<p className="mt-2 text-gray-500">AI Code Review</p>
				</div>
				<div className="border-t border-gray-500/50" />
				<div className="flex flex-col mt-4 mx-8 gap-2">
					<Link href="#placeHolder" className="p-4 rounded-lg text-gray-400 hover:text-white hover:bg-gray-500/50">Dashboard</Link>
					<Link href="#placeHolder" className="p-4 rounded-lg text-gray-400 hover:text-white hover:bg-gray-500/50">Members</Link>
					<Link href="#placeHolder" className="p-4 rounded-lg text-gray-400 hover:text-white hover:bg-gray-500/50">Projects</Link>
					<Link href="#placeHolder" className="p-4 rounded-lg text-gray-400 hover:text-white hover:bg-gray-500/50">Chat</Link>
					<Link href="#placeHolder" className="p-4 rounded-lg text-gray-400 hover:text-white hover:bg-gray-500/50">Github</Link>
					<Link href="#placeHolder" className="p-4 rounded-lg text-gray-400 hover:text-white hover:bg-gray-500/50">Settings</Link>
				</div>
			</div>
		</main>
	)
}
