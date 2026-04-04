type RoleBadgeProps = {
	role: 'Owner' | 'Admin' | 'Developer' | 'Viewer';
}

export function RoleBadge({ role }: RoleBadgeProps) {
	const colors = {
		Owner: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
		Admin: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
		Developer: 'bg-green-500/10 text-green-400 border-green-500/20',
		Viewer: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
	};

	return (
		<div className={`px-3 py-1 rounded-full text-xs border w-fit ${colors[role]}`}>
			{role}
		</div>
	);
}
