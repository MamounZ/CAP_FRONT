type MemberStatusBadgeProps = {
	status: 'Active' | 'Pending' | 'Inactive';
}

export function MemberStatusBadge({ status }: MemberStatusBadgeProps) {
	const colors = {
		Active: 'bg-green-500/10 text-green-400 border-green-500/20',
		Pending: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
		Inactive: 'bg-red-500/10 text-red-400 border-red-500/20',
	};

	return (
		<div className={`px-3 py-1 rounded-full text-xs border w-fit ${colors[status]}`}>
			{status}
		</div>
	);
}
