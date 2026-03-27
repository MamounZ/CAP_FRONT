import { TeamSetupData } from "@/types/TeamSetupData"
import { Trash2 } from "lucide-react"

type TeamMembersProps = {
	data: TeamSetupData
	setData: (data: TeamSetupData) => void
	next: () => void
	back: () => void
}

type updateMemberParameters ={
	index: number,
	field: string,
	value: string
}

export default function TeamMembers({data, setData, next, back}: TeamMembersProps){
	const updateMember = ({index, field, value}: updateMemberParameters) => {
		const updated = [...data.members];
		updated[index] = { ...updated[index], [field]: value };
		setData({ ...data, members: updated });
	}

	const removeMember = (index: number) => {
		const updated = data.members.filter((_, i) => i !== index);
		setData({ ...data, members: updated });
	}

	const addMember = () => {
		const updated = [...data.members, {name: "",github: "",email: "",role: "Owner" as const,type: "manual" as const}]
		setData({ ...data, members: updated });
	}
	
	return(
		<>
			<p className="text-4xl font-bold">Team Members</p>
			<p className="text-lg text-gray-500 mt-2">Add members using GitHub or email. You can invite them later using a shareable link.</p>
			<div className="border rounded-2xl mt-8 mb-4 p-4 bg-white/5 border-white/10 text-gray-500">
				💡 Tip: You can invite teammates by email or share a private invite link after creating the team.
			</div>
			<div>
				{data.members.map((member, index) =>
					<div key={index} className="flex flex-col items-center lg:flex-row gap-4 border rounded-2xl my-4 p-4 bg-white/5 border-white/10 text-gray-500">
						<input
						placeholder="Full Name"
						value={member.name}
						onChange={(e) => updateMember({index, field: "name", value: e.target.value})}
						className="w-full border border-gray-500/50 p-4 rounded-xl"
						/>

						<input
						placeholder="GitHub username"
						value={member.github}
						onChange={(e) => updateMember({index, field: "github", value: e.target.value})}
						className="w-full border border-gray-500/50 p-4 rounded-xl"
						/>

						<input
						type="email"
						placeholder="Email address"
						value={member.email}
						onChange={(e) => updateMember({index, field: "email", value: e.target.value})}
						className="w-full border border-gray-500/50 p-4 rounded-xl"
						/>

						<select
						value={member.role}
						onChange={(e) => updateMember({index, field: "role", value: e.target.value})}
						className="w-full border border-gray-500/50 p-4 rounded-xl"
						>
							<option className="bg-black/80 text-white">Owner</option>
							<option className="bg-black/80 text-white">Admin</option>
							<option className="bg-black/80 text-white">Developer</option>
							<option className="bg-black/80 text-white">Viewer</option>
						</select>

						<button
						onClick={() => removeMember(index)}
						className="text-red-400 hover:text-red-200">
							<Trash2 size={24} />
						</button>
					</div>
				)}
			</div>
			<p onClick={addMember} className="text-cyan-500 font-bold">+ Add Member</p>
			<div className="flex justify-between">
				<button onClick={back} className='my-4 mx-6 font-bold text-gray-500 hover:text-gray-300'>
					Back
				</button>
				<button onClick={next} className='py-4 px-6 rounded-xl text-black font-bold bg-linear-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50'>
					Continue
				</button>
			</div>
		</>
	)
}
