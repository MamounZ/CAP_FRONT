import Link from "next/link";
import {X, LayoutDashboard, Users, FolderGit2, MessageSquare, Github, Settings, type LucideIcon} from "lucide-react"
import type { Dispatch, SetStateAction } from "react"

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

type SideBarProps = {
	isMobileSidebarOpen: boolean
	setIsMobileSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export default function SideBar({isMobileSidebarOpen, setIsMobileSidebarOpen}:SideBarProps){
	return(
		<>
			<div className={`fixed inset-0 z-40 lg:hidden ${isMobileSidebarOpen ? "block" : "hidden"}`}>
				<button className="absolute inset-0 bg-black/50" onClick={() => setIsMobileSidebarOpen(false)}/>
				<div className="absolute top-0 left-0 min-h-full w-80 border-r border-gray-500/50 bg-gray-900">
					<div className="m-8 flex items-start justify-between">
						<div>
							<p className=" text-2xl">Team Hub</p>
							<p className="mt-2 text-gray-500">AI Code Review</p>
						</div>
						<button
							onClick={() => setIsMobileSidebarOpen(false)}>
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
		</>
	)
}
