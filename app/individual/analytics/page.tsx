"use client"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts';

export default function analytics(){
	// Mock data for charts
		const reviewsPerWeek = [
		{ week: 'Week 1', reviews: 4 },
		{ week: 'Week 2', reviews: 7 },
		{ week: 'Week 3', reviews: 5 },
		{ week: 'Week 4', reviews: 9 },
		{ week: 'Week 5', reviews: 12 },
		{ week: 'Week 6', reviews: 8 },
		{ week: 'Week 7', reviews: 15 },
		{ week: 'Week 8', reviews: 11 },
	];

	const issuesOverTime = [
		{ month: 'Jan', critical: 5, high: 12, medium: 23, low: 15 },
		{ month: 'Feb', critical: 3, high: 15, medium: 28, low: 18 },
		{ month: 'Mar', critical: 7, high: 10, medium: 20, low: 12 },
		{ month: 'Apr', critical: 2, high: 8, medium: 18, low: 10 },
	];

	const issuesByType = [
		{ name: 'Bugs', value: 145, color: '#ef4444' },
		{ name: 'Security', value: 89, color: '#f97316' },
		{ name: 'Performance', value: 234, color: '#eab308' },
		{ name: 'Code Style', value: 178, color: '#3b82f6' },
	];

	const fixesApplied = [
		{ week: 'Week 1', fixes: 32 },
		{ week: 'Week 2', fixes: 45 },
		{ week: 'Week 3', fixes: 38 },
		{ week: 'Week 4', fixes: 67 },
		{ week: 'Week 5', fixes: 89 },
		{ week: 'Week 6', fixes: 54 },
		{ week: 'Week 7', fixes: 102 },
		{ week: 'Week 8', fixes: 78 },
	];

	return(
		<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

			<div className="bg-gray-900 px-8 py-6 rounded-xl border border-gray-500/50">
				<p className='mb-4'>Reviews per Week</p>
				<ResponsiveContainer width="100%" height={300}>
					<BarChart data={reviewsPerWeek}>
						<CartesianGrid strokeDasharray="3 3" stroke="#374151" />
						<XAxis dataKey="week" stroke="#9ca3af" />
						<YAxis stroke="#9ca3af" />
						<Tooltip
							contentStyle={{
								backgroundColor: '#1a1a2e',
								border: '1px solid #374151',
								borderRadius: '8px',
								color: '#fff',
							}}
						/>
						<Bar dataKey="reviews" fill="#06b6d4" radius={[8, 8, 0, 0]} />
					</BarChart>
				</ResponsiveContainer>
			</div>

			<div className="bg-gray-900 px-8 py-6 rounded-xl border border-gray-500/50">
				<p className='mb-4'>Issues by Type</p>
				<ResponsiveContainer width="100%" height={300}>
					<PieChart>
						<Pie
							data={issuesByType}
							cx="50%"
							cy="50%"
							labelLine={false}
							label={({ name, percent }) => `${name}: ${((percent ?? 0) * 100).toFixed(0)}%`}
							outerRadius={100}
							fill="#8884d8"
							dataKey="value"
						>
							{issuesByType.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={entry.color} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: '#1a1a2e',
								border: '1px solid #374151',
								borderRadius: '8px',
								color: '#fff',
							}}
						/>
					</PieChart>
				</ResponsiveContainer>
			</div>

			<div className="bg-gray-900 px-8 py-6 rounded-xl border border-gray-500/50">
				<p className='mb-4'>Issues Over Time</p>
				<ResponsiveContainer width="100%" height={300}>
					<LineChart data={issuesOverTime}>
						<CartesianGrid strokeDasharray="3 3" stroke="#374151" />
						<XAxis dataKey="month" stroke="#9ca3af" />
						<YAxis stroke="#9ca3af" />
						<Tooltip
							contentStyle={{
								backgroundColor: '#1a1a2e',
								border: '1px solid #374151',
								borderRadius: '8px',
								color: '#fff',
							}}
						/>
						<Legend />
						<Line type="monotone" dataKey="critical" stroke="#ef4444" strokeWidth={2} />
						<Line type="monotone" dataKey="high" stroke="#f97316" strokeWidth={2} />
						<Line type="monotone" dataKey="medium" stroke="#eab308" strokeWidth={2} />
						<Line type="monotone" dataKey="low" stroke="#3b82f6" strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</div>

			<div className="bg-gray-900 px-8 py-6 rounded-xl border border-gray-500/50">
				<p className='mb-4'>Fixes Applied per Week</p>
				 <ResponsiveContainer width="100%" height={300}>
					<LineChart data={fixesApplied}>
						<CartesianGrid strokeDasharray="3 3" stroke="#374151" />
						<XAxis dataKey="week" stroke="#9ca3af" />
						<YAxis stroke="#9ca3af" />
						<Tooltip
							contentStyle={{
								backgroundColor: '#1a1a2e',
								border: '1px solid #374151',
								borderRadius: '8px',
								color: '#fff',
							}}
						/>
						<Line
							type="monotone"
							dataKey="fixes"
							stroke="#10b981"
							strokeWidth={3}
							dot={{ fill: '#10b981', r: 5 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>

		</div>
	)
}
