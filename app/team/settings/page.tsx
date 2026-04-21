"use client";

import { Upload, AlertTriangle } from "lucide-react";
import ColoredButton from "@/components/ColoredButton";

export default function TeamSettings() {
	return (
		<div className="flex flex-col gap-8">
			<div className="bg-gray-900 px-4 md:px-8 py-6 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30">
				<div className="space-y-3">
					<p className="text-xl md:text-3xl">Team Settings</p>
					<p className="text-gray-500 text-sm md:text-base">
						Manage your team information and preferences
					</p>
				</div>
			</div>

			<div className="bg-gray-900 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/20 px-4 py-6 sm:px-6 space-y-6">
				<p className="text-xl sm:text-2xl">Team Information</p>

				<div>
					<label className="block text-sm mb-2 text-gray-300">Team Name</label>
					<input
						type="text"
						defaultValue="Development Team"
						className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
					/>
				</div>

				<div>
					<label className="block text-sm mb-2 text-gray-300">Description</label>
					<textarea
						defaultValue="Our main development team working on AI code review tools"
						className="w-full min-h-28 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
					/>
				</div>

				<div>
					<label className="block text-sm mb-2 text-gray-300">Team Logo</label>
					<div className="flex flex-col sm:flex-row sm:items-center gap-4">
						<div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400 text-xl font-semibold">
							DT
						</div>

						<button className="w-fit flex items-center gap-2 px-4 py-3 rounded-xl border border-gray-500/50 text-gray-300 hover:text-white hover:border-cyan-500/50 hover:bg-black/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20 active:translate-y-0 transition-all duration-200">
							<Upload size={16} />
							Upload New Logo
						</button>
					</div>
				</div>

				<div className="justify-self-end">
					<ColoredButton onClick={() => console.log("save team settings")}>
						Save Changes
					</ColoredButton>
				</div>
			</div>

			<div className="bg-gray-800 border-2 border-red-500/20 rounded-lg px-4 py-6 sm:px-6 space-y-6">
				<div className="flex items-center gap-2">
					<AlertTriangle className="size-5 text-red-400" />
					<h3 className="text-xl sm:text-2xl font-bold text-red-400">
						Danger Zone
					</h3>
				</div>

				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-4 border-b border-gray-500/40">
					<div>
						<p className="text-white">Leave Team</p>
						<p className="text-sm text-neutral-400">
							Remove yourself from this team
						</p>
					</div>

					<button onClick={() => {console.log("hi")}} className="w-full md:w-fit px-4 py-3 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/15 hover:border-red-400/40 hover:text-red-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/15 active:translate-y-0 active:bg-red-500/20 transition-all duration-200">
						Leave Team
					</button>
				</div>

				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
					<div>
						<p className="text-white">Delete Team</p>
						<p className="text-sm text-neutral-400">
							Permanently delete this team and all its data
						</p>
					</div>

					<button onClick={() => {console.log("hi")}} className="w-full md:w-fit px-4 py-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 hover:border-red-400/60 hover:text-red-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/20 active:translate-y-0 active:bg-red-500/35 transition-all duration-200">
						Delete Team
					</button>
				</div>
			</div>
		</div>
	);
}
