"use client"

import { useState } from "react"
import TopBar from "@/components/team/TopBar"
import SideBar from "@/components/team/SideBar"


type TeamLayoutProps = {
	children: React.ReactNode
}

export default function TeamLayout({ children }: TeamLayoutProps) {
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

	return (
		<main className="relative min-h-screen overflow-x-hidden bg-gray-900/50">
			<TopBar setIsMobileSidebarOpen={setIsMobileSidebarOpen}/>

			<SideBar isMobileSidebarOpen={isMobileSidebarOpen} setIsMobileSidebarOpen={setIsMobileSidebarOpen}/>

			<div className="w-full pt-28 lg:pl-80">
				<div className="px-4 pb-10 lg:px-12">
					{children}
				</div>
			</div>
		</main>
	)
}
