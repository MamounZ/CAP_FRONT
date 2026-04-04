type ProjectStatusBadgeProps = {
  status: 'Pending' | 'Completed' | 'Failed' | 'In Progress';
}

export function ProjectStatusBadge({ status }: ProjectStatusBadgeProps) {
	const colors = {
		Pending: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
		Completed: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
		Failed: 'bg-red-500/10 text-red-400 border-red-500/20',
		"In Progress": 'bg-gray-500/10 text-gray-400 border-gray-500/20',
	};

	return (
		<div className={`px-3 py-1 w-fit rounded-full text-xs border ${colors[status]}`}>
			{status}
		</div>
	);
}
