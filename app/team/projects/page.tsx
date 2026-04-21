"use client";

import { useState } from "react";
import { mockProjects, mockTeamMembers } from "@/app/data/mockData";
import ProjectCard from "@/components/team/ProjectCard";
import { Plus, X } from "lucide-react";
import BorderedButton from "@/components/BorderedButton";
import ColoredButton from "@/components/ColoredButton";

export default function TeamProjects() {
	const [showNewProjectModal, setShowNewProjectModal] = useState(false);
	const [projectName, setProjectName] = useState("");
	const [githubRepo, setGithubRepo] = useState("");
	const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

	const handleCreateProject = () => {
		console.log("Creating project:", {
			projectName,
			githubRepo,
			selectedMembers,
		});

		setShowNewProjectModal(false);
		setProjectName("");
		setGithubRepo("");
		setSelectedMembers([]);
	};

	const toggleMember = (memberId: string) => {
		if (selectedMembers.includes(memberId)) {
			setSelectedMembers(selectedMembers.filter((id) => id !== memberId));
		} else {
			setSelectedMembers([...selectedMembers, memberId]);
		}
	};

	return (
		<div className="flex flex-col gap-8">
			<div className="bg-gray-900 px-4 md:px-8 py-6 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30">
				<div className="flex flex-col md:flex-row justify-between gap-4 items-center">
					<div className="space-y-3 text-center md:text-left">
						<p className="text-xl md:text-3xl">Team Projects</p>
						<p className="text-gray-500 text-sm md:text-base">
							Manage and monitor your team's projects
						</p>
					</div>

					<button
						onClick={() => setShowNewProjectModal(true)}
						className="flex items-center gap-3 px-4 py-3 bg-linear-to-r from-cyan-500 to-teal-500 rounded-xl text-black font-bold hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
					>
						<Plus size={20} />
						New Project
					</button>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6">
				{mockProjects.map((project) => (
					<ProjectCard
						key={project.id}
						name={project.name}
						language={project.language}
						score={project.score}
						issues={project.issues}
						lastScan={project.lastScan}
					/>
				))}
			</div>

			{showNewProjectModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
					<div className="w-full max-w-xl rounded-xl bg-gray-900 border border-cyan-500/30 px-6 py-6 shadow-2xl shadow-cyan-500/20">
						<div className="flex items-center justify-between mb-6">
							<p className="text-2xl font-semibold">Create New Project</p>
							<button
								onClick={() => setShowNewProjectModal(false)}
								className="text-gray-400 hover:text-white"
							>
								<X size={22} />
							</button>
						</div>

						<div className="space-y-4">
							<div>
								<label className="block text-sm mb-2 text-gray-300">
									Project Name
								</label>
								<input
									type="text"
									value={projectName}
									onChange={(e) => setProjectName(e.target.value)}
									placeholder="Enter project name"
									className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
								/>
							</div>

							<div>
								<label className="block text-sm mb-2 text-gray-300">
									GitHub Repository
								</label>
								<input
									type="text"
									value={githubRepo}
									onChange={(e) => setGithubRepo(e.target.value)}
									placeholder="username/repository"
									className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
								/>
							</div>

							<div>
								<label className="block text-sm mb-2 text-gray-300">
									Team Members
								</label>

								<div className="space-y-2 max-h-48 overflow-y-auto bg-black/40 border border-cyan-500/30 rounded-xl p-3">
									{mockTeamMembers.map((member) => (
										<label
											key={member.id}
											className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer"
										>
											<input
												type="checkbox"
												checked={selectedMembers.includes(member.id)}
												onChange={() => toggleMember(member.id)}
												className="accent-cyan-500"
											/>

											<div>
												<p className="text-white text-sm">{member.name}</p>
												<p className="text-gray-500 text-xs">
													{member.role}
												</p>
											</div>
										</label>
									))}
								</div>
							</div>

							<div className="flex gap-3 pt-4">
								<BorderedButton
									onClick={() => setShowNewProjectModal(false)}
								>
									Cancel
								</BorderedButton>

								<ColoredButton
									onClick={handleCreateProject}
								>
									Create Project
								</ColoredButton>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
