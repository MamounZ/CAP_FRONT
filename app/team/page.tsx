"use client";

import { TrendingUp, Users, CheckCircle, Activity, UserPlus } from "lucide-react";
import { mockProjects, mockTeamAnalytics, mockTeamMembers, mockActivities } from "../data/mockData";
import TeamDashboardCard from "@/components/team/TeamDashboardCard";
import RecentReviews from "@/components/team/RecentReviews";
import BorderedButton from "@/components/BorderedButton";

export default function TeamDashboard() {
	const teamMembersCount = mockTeamMembers.length;
	const projectMembers = mockProjects.length;
	const activities = mockActivities.slice(0, 6);

	return (
		<div className="flex flex-col gap-8">
			<div className="flex justify-end">
				<BorderedButton onClick={() => console.log("convert to individual dashboard")}>
					Convert to Individual Dashboard
				</BorderedButton>
			</div>

			<div className="bg-gray-900 px-4 md:px-8 py-8 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30">
				<div className="flex flex-col md:flex-row justify-between gap-4 items-center">
					<div className="text-center md:text-left">
						<p className="text-xl md:text-3xl">Development Team</p>
						<p className="text-gray-500 mt-2 text-sm md:text-base">
							Manage your team, reviews, and collaboration workspace
						</p>
						<div className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-gray-500 text-sm mt-3">
							<p>{teamMembersCount} Members</p>
							<div className="hidden md:block rounded-full border-4 w-1 h-1" />
							<p>{projectMembers} Projects</p>
						</div>
					</div>

					<button className="flex items-center gap-3 px-4 py-3 bg-linear-to-r from-cyan-500 to-teal-500 rounded-xl text-black font-bold hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50">
						<UserPlus className="size-5" />
						Invite Member
					</button>
				</div>
			</div>

			<div>
				<p className="text-xl">Overview</p>
				<div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4 mt-2">
					<TeamDashboardCard
						title="Team Score"
						Icon={TrendingUp}
						score={mockTeamAnalytics.teamScore}
						trend={mockTeamAnalytics.teamScoreTrend}
						footer="Overall Code Quality"
					/>
					<TeamDashboardCard
						title="Reviews This Week"
						Icon={Activity}
						score={mockTeamAnalytics.reviewsThisWeek}
						trend={mockTeamAnalytics.reviewsTrend}
						footer={`${mockTeamAnalytics.automatedReviews} automated`}
					/>
					<TeamDashboardCard
						title="Issues Fixed"
						Icon={CheckCircle}
						score={mockTeamAnalytics.issuesFixed}
						trend={mockTeamAnalytics.issuesTrend}
						footer="This month"
					/>
					<TeamDashboardCard
						title="Active Members"
						Icon={Users}
						score={mockTeamAnalytics.activeMembers}
						trend={null}
						footer={`${mockTeamAnalytics.onlineMembers} online now`}
					/>
				</div>
			</div>

			<div>
				<p className="text-lg md:text-xl mb-2">Recent Reviews</p>
				<div className="bg-gray-900 px-8 py-4 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30">
					<RecentReviews />
				</div>
			</div>

			<div>
				<p className="text-lg md:text-xl mb-2">Team Activity</p>
				<div className="bg-gray-900 px-8 py-4 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30">
					{activities.map((activity) => {
						return (
							<div
								key={activity.id}
								className="flex gap-8 my-4 pb-2 items-center border-b border-gray-500/50 last:border-b-0"
							>
								<div className="border-4 border-cyan-500 rounded-full w-1 h-1" />
								<div>
									<p className="text-xl">{activity.text}</p>
									<p className="text-sm text-gray-500">{activity.time}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
