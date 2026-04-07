import type { LucideIcon } from 'lucide-react';

type TeamDashboardCardProps = {
	title: string,
	Icon: LucideIcon,
	score: number,
	trend: string | null,
	footer: string
}

export default function TeamDashboardCard({title, Icon, score, trend, footer}: TeamDashboardCardProps){
	return(
		<div className="bg-gray-900 px-8 py-4 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30 min-w-0">
			<div className='flex justify-between w-full text-gray-500 text-sm'>
				<p>{title}</p>
				<Icon />
			</div>
			<div className='flex items-baseline'>
				<p className='pt-2 pb-2 pr-2 text-4xl'>{score}</p>
				<p className='text-green-500 text-sm'>{trend}</p>
			</div>
			<p className='text-gray-500 text-sm'>{footer}</p>
		</div>
	)
}
