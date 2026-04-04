import { mockCodeReviews } from "@/app/data/mockData"
import { ProjectStatusBadge } from "./ProjectStatusBadge"

export default function RecentReviews(){
	const recentReviews = mockCodeReviews.slice(0,6)

	return (
		<>
			<p className='text-lg md:text-xl'>Recent Reviews</p>
			<table className='w-full'>
				<thead>
					<tr className='text-left'>
						<th className='border-b border-gray-500/50 py-4 px-2 text-gray-500'>Project</th>
						<th className='border-b border-gray-500/50 py-4 px-2 text-gray-500'>Reviewer</th>
						<th className='border-b border-gray-500/50 py-4 px-2 text-gray-500 hidden md:table-cell'>Score</th>
						<th className='border-b border-gray-500/50 py-4 px-2 text-gray-500 hidden md:table-cell'>Issues</th>
						<th className='border-b border-gray-500/50 py-4 px-2 text-gray-500'>Status</th>
						<th className='border-b border-gray-500/50 py-4 px-2 text-gray-500 hidden md:table-cell'>Date</th>
					</tr>
				</thead>
				<tbody>
				{recentReviews.map((review) => (
					<tr key={review.id}>
						<td className='border-b border-gray-500/50 py-4 px-2'>{review.project}</td>
						<td className='border-b border-gray-500/50 py-4 px-2'>{review.reviewer}</td>
						<td className='border-b border-gray-500/50 py-4 px-2 hidden md:table-cell'>{review.score}</td>
						<td className='border-b border-gray-500/50 py-4 px-2 hidden md:table-cell'>{review.issues}</td>
						<td className='border-b border-gray-500/50 py-4 px-2'><ProjectStatusBadge status={`${review.status}`}/></td>
						<td className='border-b border-gray-500/50 py-4 px-2 text-gray-500 hidden md:table-cell'>{review.date}</td>
					</tr>
				))}
				</tbody>
			</table>
		</>
	)
}

