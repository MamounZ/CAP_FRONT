"use client"

import { useState } from "react"
import IndividualTopBar from "@/components/individual/IndividualTopBar"
import IndividualSideBar from "@/components/individual/IndividualSideBar"


type TeamLayoutProps = {
	children: React.ReactNode
}

export default function TeamLayout({ children }: TeamLayoutProps) {
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

	//	if (the logged in user has github connected)
	//		return children

	return (
		<main className="relative min-h-screen overflow-x-hidden bg-gray-900/50">
			<IndividualTopBar setIsMobileSidebarOpen={setIsMobileSidebarOpen}/>

			<IndividualSideBar isMobileSidebarOpen={isMobileSidebarOpen} setIsMobileSidebarOpen={setIsMobileSidebarOpen}/>

			<div className="w-full pt-28 lg:pl-80">
				<div className="px-4 pb-10 lg:px-12">
					{children}
				</div>
			</div>
		</main>
	)
}
