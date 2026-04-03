"use client"

import { useState } from "react"
import Link from "next/link"
import {Search, Bell, User, Menu, X, LayoutDashboard, Users, FolderGit2, MessageSquare, Github, Settings, type LucideIcon} from "lucide-react"


type TeamLayoutProps = {
  children: React.ReactNode
}

type TeamTab = {
	label: string
	href: string
	icon?: LucideIcon
}

const teamTabs: TeamTab[] = [
	{ label: "Dashboard", href: "/team", icon: LayoutDashboard },
	{ label: "Members", href: "/team/members", icon: Users},
	{ label: "Projects", href: "/team/projects", icon: FolderGit2},
	{ label: "Chat", href: "/team/chat", icon: MessageSquare},
	{ label: "Github", href: "/team/github", icon: Github},
	{ label: "Settings", href: "/team/settings", icon: Settings},
]

export default function TeamLayout({ children }: TeamLayoutProps) {
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

	return (
		<main className="relative min-h-screen overflow-x-hidden bg-gray-900/50">
			<div className="absolute top-0 left-0 right-0 z-30 border-b border-gray-500/50 bg-gray-900 px-6 py-4 lg:left-80 lg:px-12">
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
						<User className="w-8 h-8"/>
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
						{teamTabs.map(({ label, href, icon: Icon }) => (
							<Link
								key={label}
								href={href}
								onClick={() => setIsMobileSidebarOpen(false)}
								className="flex items-center gap-3 p-4 rounded-lg text-gray-400 hover:text-white hover:bg-gray-500/50">
								{Icon ? <Icon className="h-5 w-5" /> : null}
								<span>{label}</span>
							</Link>
						))}
					</div>
				</div>
			</div>

			<div className="absolute top-0 left-0 z-20 min-h-full w-80 border-r border-gray-500/50 bg-gray-900 hidden lg:block">
				<div className="m-8">
					<p className=" text-2xl">Team Hub</p>
					<p className="mt-2 text-gray-500">AI Code Review</p>
				</div>
				<div className="border-t border-gray-500/50" />
				<div className="flex flex-col mt-4 mx-8 gap-2">
					{teamTabs.map(({ label, href, icon: Icon }) => (
						<Link
							key={label}
							href={href}
							className="flex items-center gap-3 p-4 rounded-lg text-gray-400 hover:text-white hover:bg-gray-500/50">
							{Icon ? <Icon className="h-5 w-5" /> : null}
							<span>{label}</span>
						</Link>
					))}
				</div>
			</div>

			<div className="w-full pt-28 lg:pl-80">
				<div className="px-4 pb-10 lg:px-12">
					{children}
				</div>
			</div>
		</main>
	)
}
