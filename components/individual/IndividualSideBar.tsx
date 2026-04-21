import Link from "next/link";
import {X, LayoutDashboard, History, Github, BarChart3, Settings, Users, type LucideIcon} from "lucide-react"
import type { Dispatch, SetStateAction } from "react"
import Image from "next/image";

type TeamTab = {
	label: string
	href: string
	icon?: LucideIcon
}

const teamTabs: TeamTab[] = [
	{ label: "Dashboard", href: "/individual", icon: LayoutDashboard },
	{ label: "Review History", href: "/individual/reviewHistory", icon: History},
	{ label: "Repositories", href: "/individual/repositories", icon: Github},
	{ label: "My Teams", href: "/individual/myTeams", icon: Users },
	{ label: "Analytics", href: "/individual/analytics", icon: BarChart3},
	{ label: "Settings", href: "/individual/settings", icon: Settings},
]

type IndividualSideBarProps = {
	isMobileSidebarOpen: boolean
	setIsMobileSidebarOpen: Dispatch<SetStateAction<boolean>>
	path: string
}

export default function IndividualSideBar({isMobileSidebarOpen, setIsMobileSidebarOpen, path}:IndividualSideBarProps){
	return(
		<>
			<div className={`fixed inset-0 z-40 lg:hidden ${isMobileSidebarOpen ? "block" : "hidden"}`}>
				<button className="absolute inset-0 bg-black/50" onClick={() => setIsMobileSidebarOpen(false)}/>
				<div className="fixed top-0 left-0 min-h-full w-80 border-r border-cyan-500/50 bg-black/85">
					<div className="m-8 flex items-start justify-between">
						<div className="justify-self-center flex flex-col items-center">
							<Image src="/assets/CAPLogo.png" alt="logo" width={100} height={100} loading="eager" className="drop-shadow-[0_0_12px_rgba(34,211,238,0.55)] w-auto h-auto"/>
							<p className="text-cyan-500">CODE AGENT PLATFORM</p>
						</div>
						<button
							onClick={() => setIsMobileSidebarOpen(false)}>
							<X className="w-7 h-7" />
						</button>
					</div>
					<div className="border-t border-cyan-500/50 shadow-lg shadow-cyan-500" />
					<div className="flex flex-col mt-4 mx-8 gap-2">
						{teamTabs.map(({ label, href, icon: Icon }) => (
							<Link
								key={label}
								href={href}
								onClick={() => setIsMobileSidebarOpen(false)}
								className={`flex items-center gap-3 p-4 rounded-lg ${path === href ? "bg-linear-to-r from-cyan-500 to-teal-500 shadow-lg shadow-cyan-500/30": "text-gray-400 hover:text-white hover:bg-gray-500/50"}`}>
								{Icon ? <Icon className="h-5 w-5" /> : null}
								<span>{label}</span>
							</Link>
						))}
					</div>
				</div>
			</div>

			<div className=" fixed top-0 left-0 z-20 min-h-full w-80 border-r border-cyan-500/50 bg-black/50 hidden lg:block shadow-lg shadow-cyan-500/50">
				<div className="m-8 justify-self-center flex flex-col items-center">
					<Image src="/assets/CAPLogo.png" alt="logo" width={100} height={100} loading="eager" className="drop-shadow-[0_0_12px_rgba(34,211,238,0.55)] w-auto h-auto"/>
					<p className="text-cyan-500">CODE AGENT PLATFORM</p>
				</div>
				<div className="border border-cyan-500/50 shadow-2xl shadow-cyan-500" />
				<div className="flex flex-col mt-4 mx-8 gap-2">
					{teamTabs.map(({ label, href, icon: Icon }) => (
						<Link
							key={label}
							href={href}
							className={`flex items-center gap-3 p-4 rounded-lg ${path === href ? "bg-linear-to-r from-cyan-500 to-teal-500 shadow-lg shadow-cyan-500/30": "text-gray-400 hover:text-white hover:bg-gray-500/50"}`}>
							{Icon ? <Icon className="h-5 w-5" /> : null}
							<span>{label}</span>
						</Link>
					))}
				</div>
			</div>
		</>
	)
}
