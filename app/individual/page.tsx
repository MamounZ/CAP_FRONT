'use client'

import { TrendingUp, Users, CheckCircle, Activity, FileText } from 'lucide-react';
import { mockProjects, mockTeamAnalytics, mockTeamMembers , mockActivities} from '../data/mockData';
import TeamDashboardCard from '@/components/team/TeamDashboardCard';
import IndividualRecentReviews from '@/components/individual/IndividualRecentReviews';
import Link from 'next/link';

export default function TeamDashboard(){
	const activities = mockActivities.slice(0 , 6)

	return (
		<div className="flex flex-col gap-8">
			<div className="bg-gray-900 px-4 md:px-8 py-8 rounded-xl border border-gray-500/50">
				<div className="flex flex-col items-center gap-4">
					<p className="text-xl md:text-3xl">Ready to Review Your Code?</p>
					<p className="text-gray-500">Start a new review to get instant AI-powered analysis with detailed suggestions and fixes.</p>
					<button className='inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-cyan-400 to-cyan-500 text-[#0A2463] font-bold rounded-xl hover:from-cyan-300 hover:to-cyan-400 transition-all shadow-lg shadow-cyan-500/50 transform hover:scale-105'><FileText/>Start Review</button>
				</div>
			</div>
			<div>
				<p className='text-xl'>Overview</p>
				<div className='grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4 mt-2'>
					<TeamDashboardCard title='Team Score' Icon={TrendingUp} score={mockTeamAnalytics.teamScore} trend={mockTeamAnalytics.teamScoreTrend} footer='Overall Code Quality'/>
					<TeamDashboardCard title='Reviews This Week' Icon={Activity} score={mockTeamAnalytics.reviewsThisWeek} trend={mockTeamAnalytics.reviewsTrend} footer={`${mockTeamAnalytics.automatedReviews} automated`}/>
					<TeamDashboardCard title='Issues Fixed' Icon={CheckCircle} score={mockTeamAnalytics.issuesFixed} trend={mockTeamAnalytics.issuesTrend} footer='This month'/>
					<TeamDashboardCard title='Active Members' Icon={Users} score={mockTeamAnalytics.activeMembers} trend={null} footer={`${mockTeamAnalytics.onlineMembers} online now`}/>
				</div>
			</div>
			<div>
				<div className='flex justify-between'>
					<p className='text-lg md:text-xl'>Recent Reviews</p>
					<button
                  onClick={()=> console.log("hiiiiiii")}
                  className="text-sm text-cyan-500 hover:text-cyan-300"
                >
                  View All
                </button>
				</div>
				<div className="bg-gray-900 px-8 py-4 rounded-xl border border-gray-500/50 mt-2">
					<IndividualRecentReviews />
				</div>
			</div>
		</div>
	)
}
