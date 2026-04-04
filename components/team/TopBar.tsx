import type { Dispatch, SetStateAction } from "react"
import {Search, Bell, User, Menu} from "lucide-react"

type TopBarProps = {
  setIsMobileSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export default function TopBar({setIsMobileSidebarOpen }: TopBarProps){
	return(
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
	)
}
