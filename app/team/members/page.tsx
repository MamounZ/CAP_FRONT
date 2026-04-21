"use client";

import { useState } from "react";
import { mockTeamMembers } from "@/app/data/mockData";
import { MemberStatusBadge } from "@/components/team/MemberStatusBadge";
import { RoleBadge } from "@/components/team/RoleBadge";
import { MoreVertical, UserPlus, Mail } from "lucide-react";
import BorderedButton from "@/components/BorderedButton";
import ColoredButton from "@/components/ColoredButton";

export default function TeamMembers() {
	const [inviteMember, setInviteMember] = useState(false);

	return (
		<div className="flex flex-col gap-8">
			<div className="bg-gray-900 px-4 md:px-8 py-6 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30">
				<div className="flex flex-col md:flex-row justify-between gap-4 items-center">
					<div className="space-y-3 text-center md:text-left">
						<p className="text-xl md:text-3xl">Team Members</p>
						<p className="text-gray-500 text-sm md:text-base">
							Manage your team and member permissions
						</p>
					</div>

					<button
						onClick={() => setInviteMember(true)}
						className="flex items-center gap-3 px-4 py-3 bg-linear-to-r from-cyan-500 to-teal-500 rounded-xl text-black font-bold hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
					>
						<UserPlus className="size-5" />
						Invite Member
					</button>
				</div>
			</div>

			<div className="bg-gray-900 px-4 md:px-8 py-4 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30 hidden lg:block">
				<table className="w-full">
					<thead>
						<tr className="text-left">
							<th className="border-b border-gray-500/50 py-4 px-2 text-gray-500">Member</th>
							<th className="border-b border-gray-500/50 py-4 px-2 text-gray-500">Role</th>
							<th className="border-b border-gray-500/50 py-4 px-2 text-gray-500">Reviews Run</th>
							<th className="border-b border-gray-500/50 py-4 px-2 text-gray-500">Projects</th>
							<th className="border-b border-gray-500/50 py-4 px-2 text-gray-500">Status</th>
							<th className="border-b border-gray-500/50 py-4 px-2 text-gray-500">Actions</th>
						</tr>
					</thead>

					<tbody>
						{mockTeamMembers.map((member) => (
							<tr key={member.id} className="hover:bg-white/5 transition-colors">
								<td className="border-b border-gray-500/50 py-4 px-2">
									<div className="flex items-center gap-4">
										<div className="w-10 h-10 bg-cyan-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center text-sm text-white">
											{member.name.charAt(0)}
										</div>
										<div>
											<p className="text-base">{member.name}</p>
											<p className="text-sm text-gray-500">{member.email}</p>
										</div>
									</div>
								</td>

								<td className="border-b border-gray-500/50 py-4 px-2">
									<RoleBadge role={member.role} />
								</td>

								<td className="border-b border-gray-500/50 py-4 px-2">
									{member.reviews}
								</td>

								<td className="border-b border-gray-500/50 py-4 px-2">
									{member.projects}
								</td>

								<td className="border-b border-gray-500/50 py-4 px-2">
									<MemberStatusBadge status={member.status} />
								</td>

								<td className="border-b border-gray-500/50 py-4 px-2 text-gray-500">
									<button className="text-gray-400 hover:text-white p-2 transition-colors">
										<MoreVertical size={20} />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="lg:hidden flex flex-col gap-4">
				{mockTeamMembers.map((member) => (
					<div
						key={member.id}
						className="bg-gray-900 px-5 py-5 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/20"
					>
						<div className="flex justify-between gap-3 items-start">
							<div className="flex items-center gap-3 min-w-0">
								<div className="w-10 h-10 bg-cyan-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center text-sm text-white shrink-0">
									{member.name.charAt(0)}
								</div>
								<div className="min-w-0">
									<p className="font-semibold truncate">{member.name}</p>
									<p className="text-sm text-gray-500 truncate">{member.email}</p>
								</div>
							</div>

							<button className="text-gray-400 hover:text-white p-2 transition-colors shrink-0">
								<MoreVertical size={20} />
							</button>
						</div>

						<div className="mt-4 grid grid-cols-2 gap-3">
							<div className="bg-black/40 border border-gray-500/30 rounded-xl px-4 py-3">
								<p className="text-xs text-gray-500">Reviews Run</p>
								<p className="text-lg font-semibold mt-1">{member.reviews}</p>
							</div>

							<div className="bg-black/40 border border-gray-500/30 rounded-xl px-4 py-3">
								<p className="text-xs text-gray-500">Projects</p>
								<p className="text-lg font-semibold mt-1">{member.projects}</p>
							</div>
						</div>

						<div className="mt-4 flex flex-wrap gap-2">
							<RoleBadge role={member.role} />
							<MemberStatusBadge status={member.status} />
						</div>
					</div>
				))}
			</div>

			{inviteMember && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
					<div className="w-full max-w-xl rounded-xl bg-gray-900 border border-cyan-500/30 px-6 py-6 shadow-2xl shadow-cyan-500/20">
						<p className="text-2xl font-semibold">Invite Team Member</p>
						<p className="text-sm text-gray-500 mt-2">
							Send an invite to a new member and assign their role
						</p>

						<div className="mt-6 space-y-4">
							<div>
								<label className="block text-sm mb-2 text-gray-300">Email Address</label>
								<div className="relative">
									<Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
									<input
										type="email"
										placeholder="member@example.com"
										className="w-full pl-12 pr-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
									/>
								</div>
							</div>

							<div>
								<label className="block text-sm mb-2 text-gray-300">Role</label>
								<select className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all">
									<option value="Developer" className="bg-black text-white">
										Developer
									</option>
									<option value="Admin" className="bg-black text-white">
										Admin
									</option>
									<option value="Viewer" className="bg-black text-white">
										Viewer
									</option>
								</select>
							</div>
						</div>

						<div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-end">
							<BorderedButton onClick={() => setInviteMember(false)}>
								Cancel
							</BorderedButton>
							<ColoredButton onClick={() => console.log("send invite")}>
								Send Invite
							</ColoredButton>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
