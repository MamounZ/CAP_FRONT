import { mockTeamMembers } from "@/app/data/mockData";
import { MemberStatusBadge } from "@/components/team/MemberStatusBadge";
import { RoleBadge } from "@/components/team/RoleBadge";
import { MoreVertical, UserPlus } from "lucide-react";

export default function TeamMembers(){
	return (
		<div className="flex flex-col gap-8">
			<div className="bg-gray-900 px-4 md:px-8 py-4 rounded-xl border border-gray-500/50">
				<div className="flex justify-between gap-2">
					<div className="space-y-3">
						<p className="text-xl md:text-3xl">Team Members</p>
						<p className="text-gray-500 text-sm md:text-md">Manage your team and member permissions</p>
					</div>
					<button className='flex items-center md:gap-4 p-1 md:px-4 bg-blue-700 rounded-xl md:text-xl'><UserPlus/>Invite Member</button>
				</div>
			</div>
			<div className="bg-gray-900 px-8 py-4 rounded-xl border border-gray-500/50">
				<table className='w-full'>
					<thead>
						<tr className='text-left'>
							<th className='border-b border-gray-500/50 py-4 px-2 text-gray-500'>Member</th>
							<th className='border-b border-gray-500/50 py-4 px-2 text-gray-500'>Role</th>
							<th className='border-b border-gray-500/50 py-4 px-2 text-gray-500 hidden md:table-cell'>Reviews Run</th>
							<th className='border-b border-gray-500/50 py-4 px-2 text-gray-500 hidden md:table-cell'>Projects</th>
							<th className='border-b border-gray-500/50 py-4 px-2 text-gray-500'>Status</th>
							<th className='border-b border-gray-500/50 py-4 px-2 text-gray-500 hidden md:table-cell'>Actions</th>
						</tr>
					</thead>
					<tbody>
					{mockTeamMembers.map((member) => (
						<tr key={member.id}>
							<td className='border-b border-gray-500/50 py-4 px-2'>
								<div className='flex items-center gap-2 md:gap-4'>
									<div className="w-5 h-5 md:w-10 md:h-10 bg-[#2563EB] rounded-full flex items-center justify-center text-xs md:text-lg text-white">
										{member.name.charAt(0)}
									</div>
									<div>
										<p className='text-sm md:text-xl'>{member.name}</p>
										<p className='text-xs md:text-sm text-gray-500'>{member.email}</p>
									</div>
								</div>
							</td>
							<td className='border-b border-gray-500/50 py-4 px-2 '><RoleBadge role={`${member.role}`}/></td>
							<td className='border-b border-gray-500/50 py-4 px-2 hidden md:table-cell'>{member.reviews}</td>
							<td className='border-b border-gray-500/50 py-4 px-2 hidden md:table-cell'>{member.projects}</td>
							<td className='border-b border-gray-500/50 py-4 px-2 hidden md:table-cell'><MemberStatusBadge status={`${member.status}`}/></td>
							<td className='border-b border-gray-500/50 py-4 px-2 text-gray-500'>
								<button className="text-gray-400 hover:text-white p-2">
									<MoreVertical size={20} />
								</button>
							</td>
						</tr>
					))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
