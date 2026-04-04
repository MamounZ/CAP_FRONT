import { TrendingUp, Users, CheckCircle, Activity, UserPlus } from 'lucide-react';
import { mockProjects, mockTeamAnalytics, mockTeamMembers } from '../data/mockData';
import TeamDashboardCard from '@/components/team/TeamDashboardCard';
import RecentReviews from '@/components/team/RecentReviews';

export default function TeamDashboard(){
	const teamMembersCount = mockTeamMembers.length
	const projectMembers = mockProjects.length
	return (
		<div className="flex flex-col gap-8">
			<div className="bg-gray-900 px-4 md:px-8 py-4 rounded-xl border border-gray-500/50">
				<div className="flex justify-between">
					<div className="space-y-3">
						<p className="text-xl md:text-3xl">Development Team</p>
						<div className="md:flex items-center gap-3 text-gray-500 text-sm md:text-md">
							<p>{teamMembersCount} Members</p>
							<p className='rounded-full md:border-4'></p>
							<p>{projectMembers} Projects</p>
						</div>
					</div>
					<button className='flex items-center md:gap-4 p-1 md:px-4 bg-blue-700 rounded-xl md:text-xl'><UserPlus/>Invite Member</button>
				</div>
			</div>
			<div className='grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4'>
				<TeamDashboardCard title='Team Score' Icon={TrendingUp} score={mockTeamAnalytics.teamScore} trend={mockTeamAnalytics.teamScoreTrend} footer='Overall Code Quality'/>
				<TeamDashboardCard title='Reviews This Week' Icon={Activity} score={mockTeamAnalytics.reviewsThisWeek} trend={mockTeamAnalytics.reviewsTrend} footer={`${mockTeamAnalytics.automatedReviews} automated`}/>
				<TeamDashboardCard title='Issues Fixed' Icon={CheckCircle} score={mockTeamAnalytics.issuesFixed} trend={mockTeamAnalytics.issuesTrend} footer='This month'/>
				<TeamDashboardCard title='Active Members' Icon={Users} score={mockTeamAnalytics.activeMembers} trend={null} footer={`${mockTeamAnalytics.onlineMembers} online now`}/>
			</div>
			<div className="bg-gray-900 px-8 py-4 rounded-xl border border-gray-500/50">
				<RecentReviews/>
			</div>
			<div className="bg-gray-900 px-8 py-4 rounded-xl border border-gray-500/50">asdasd</div>
		</div>
	)
}
