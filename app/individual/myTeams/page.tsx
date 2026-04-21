"use client";

import { useState } from "react";
import { Plus, Users, Crown, Code2, Shield } from "lucide-react";
import ColoredButton from "@/components/ColoredButton";
import BorderedButton from "@/components/BorderedButton";

type Team = {
	id: string;
	name: string;
	projectName: string;
	role: "Owner" | "Developer";
	members: number;
	activeReviews: number;
};

const mockTeams: Team[] = [
	{
		id: "1",
		name: "Frontend Team",
		projectName: "E-commerce Platform",
		role: "Owner",
		members: 5,
		activeReviews: 3,
	},
	{
		id: "2",
		name: "Backend Team",
		projectName: "API Services",
		role: "Developer",
		members: 8,
		activeReviews: 7,
	},
	{
		id: "3",
		name: "Mobile Team",
		projectName: "Mobile App",
		role: "Owner",
		members: 4,
		activeReviews: 2,
	},
];

export default function MyTeamsPage() {
	const [teams] = useState<Team[]>(mockTeams);
	const [showCreateForm, setShowCreateForm] = useState(false);

	return (
		<div className="flex flex-col gap-8">
			<div className="bg-gray-900 px-4 md:px-8 py-6 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30">
				<div className="space-y-3">
					<p className="text-xl md:text-3xl">My Teams</p>
					<p className="text-gray-500 text-sm md:text-base">
						Manage your team workspaces
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">
				{teams.map((team) => (
					<div
						key={team.id}
						className="bg-gray-900 px-6 py-6 rounded-xl border border-gray-500/50 hover:border-cyan-500/50 transition-colors"
					>
						<div className="flex items-start justify-between gap-4">
							<div>
								<p className="text-xl font-semibold">{team.name}</p>
								<p className="text-sm text-gray-500 mt-1">{team.projectName}</p>
							</div>

							<div
								className={`px-3 py-1 rounded-full text-xs border w-fit flex items-center gap-2 ${
									team.role === "Owner"
										? "bg-purple-500/10 text-purple-400 border-purple-500/20"
										: "bg-green-500/10 text-green-400 border-green-500/20"
								}`}
							>
								{team.role === "Owner" ? (
									<Crown className="size-3.5" />
								) : (
									<Code2 className="size-3.5" />
								)}
								{team.role}
							</div>
						</div>

						<div className="grid grid-cols-2 gap-4 mt-6">
							<div className="bg-black/40 border border-gray-500/30 rounded-xl px-4 py-4">
								<div className="flex flex-col items-center text-center gap-2">
									<Users className="size-5 text-cyan-400" />
									<p className="text-xs text-gray-500">Members</p>
									<p className="text-2xl font-semibold">{team.members}</p>
								</div>
							</div>

							<div className="bg-black/40 border border-gray-500/30 rounded-xl px-4 py-4">
								<div className="flex flex-col items-center text-center gap-2">
									<Shield className="size-5 text-green-400" />
									<p className="text-xs text-gray-500">Active Reviews</p>
									<p className="text-2xl font-semibold">{team.activeReviews}</p>
								</div>
							</div>
						</div>

						<div className="mt-6 flex justify-center">
							<ColoredButton onClick={() => console.log(`View team ${team.id}`)}>
								View Team
							</ColoredButton>
						</div>
					</div>
				))}

				<button
					type="button"
					onClick={() => setShowCreateForm(true)}
					className="min-h-[280px] rounded-xl border-2 border-dashed border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10 hover:border-cyan-400 transition-colors px-6 py-8 flex flex-col items-center justify-center text-center"
				>
					<div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4">
						<Plus className="size-8 text-cyan-400" />
					</div>
					<p className="text-lg font-semibold">Create New Team</p>
					<p className="text-sm text-gray-500 mt-2 max-w-xs">
						Set up a new team workspace for your project
					</p>
				</button>
			</div>

			{showCreateForm && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
					<div className="w-full max-w-2xl rounded-xl bg-gray-900 border border-cyan-500/30 px-6 py-6 shadow-2xl shadow-cyan-500/20">
						<div className="mb-6">
							<p className="text-2xl font-semibold">Create New Team</p>
							<p className="text-sm text-gray-500 mt-2">
								Fill in the basic information for your new team workspace
							</p>
						</div>

						<div className="space-y-4">
							<div>
								<label className="block text-sm mb-2 text-gray-300">
									Team Name
								</label>
								<input
									type="text"
									placeholder="Enter team name"
									className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
								/>
							</div>

							<div>
								<label className="block text-sm mb-2 text-gray-300">
									Project Name
								</label>
								<input
									type="text"
									placeholder="Enter project name"
									className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
								/>
							</div>

							<div>
								<label className="block text-sm mb-2 text-gray-300">
									Description
								</label>
								<textarea
									placeholder="Write a short description"
									className="w-full min-h-32 px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
								/>
							</div>
						</div>

						<div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-end">
							<BorderedButton onClick={() => setShowCreateForm(false)}>
								Cancel
							</BorderedButton>
							<ColoredButton onClick={() => console.log("Create team")}>
								Create Team
							</ColoredButton>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
