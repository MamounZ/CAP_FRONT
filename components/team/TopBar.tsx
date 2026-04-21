import type { Dispatch, SetStateAction } from "react";
import { Search, Bell, User, Menu } from "lucide-react";

type TopBarProps = {
	setIsMobileSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

export default function TopBar({ setIsMobileSidebarOpen }: TopBarProps) {
	return (
		<div className="fixed top-0 left-0 right-0 z-30 border-b border-cyan-500/50 bg-black/50 px-6 py-4 lg:left-80 lg:px-12 shadow-lg shadow-cyan-500/30 backdrop-blur-lg">
			<div className="flex justify-between gap-8">
				<div className="flex flex-1 max-w-3xl items-center gap-4">
					<button onClick={() => setIsMobileSidebarOpen(true)} className="lg:hidden">
						<Menu className="w-5 h-5 md:w-6 md:h-6" />
					</button>
					<div>
						<Search className="w-6 h-6 md:w-8 md:h-8" />
					</div>
					<input
						placeholder="Search..."
						className="w-full h-12 p-4 bg-gray-800 rounded-lg"
					/>
				</div>

				<div className="flex items-center gap-8">
					<Bell className="w-6 h-6 md:w-8 md:h-8" />
					<User className="w-6 h-6 md:w-8 md:h-8" />
				</div>
			</div>
		</div>
	);
}
