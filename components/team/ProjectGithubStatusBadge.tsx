type ProjectGithubStatusBadgeProps = {
	status: 'Connected' | 'Disconnected';
}

export function ProjectGithubStatusBadge({ status }: ProjectGithubStatusBadgeProps) {
	const colors = {
		Connected: 'bg-green-500/10 text-green-400 border-green-500/20',
		Disconnected: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
	};

	return (
		<div className={`px-3 py-1 rounded-full text-xs border w-fit h-fit ${colors[status]}`}>
			{status}
		</div>
	);
}
