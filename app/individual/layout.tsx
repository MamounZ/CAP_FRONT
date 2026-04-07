"use client"

import { useState } from "react"
import IndividualTopBar from "@/components/individual/IndividualTopBar"
import IndividualSideBar from "@/components/individual/IndividualSideBar"
import { usePathname } from 'next/navigation'


type TeamLayoutProps = {
	children: React.ReactNode
}

export default function TeamLayout({ children }: TeamLayoutProps) {
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
	const path = usePathname()
	console.log("path is" + path)

	//	if (the logged in user has github connected)
	//		return children

	return (
		<main className="relative min-h-screen overflow-x-hidden bg-black/50">
			<div className="fixed -left-15 -top-15 rounded-full w-52 h-52 bg-cyan-500/40 blur-3xl"/>
			<div className="fixed -right-15 -bottom-15 rounded-full w-80 h-80 bg-teal-600/20 blur-3xl"/>
			<div className="fixed left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl"/>
			<div className="fixed left-1/8 top-4/6 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl"/>
			<IndividualTopBar setIsMobileSidebarOpen={setIsMobileSidebarOpen}/>
			<IndividualSideBar isMobileSidebarOpen={isMobileSidebarOpen} setIsMobileSidebarOpen={setIsMobileSidebarOpen} path={path}/>
			<div className="w-full pt-28 lg:pl-80">
				<div className="z-20 px-4 pb-10 lg:px-12">
					{children}
				</div>
			</div>
		</main>
	)
}
