import { TeamSetupData } from "@/types/TeamSetupData"

type TeamInfoProps = {
	data: TeamSetupData
	setData: (data: TeamSetupData) => void
	next: () => void
}

export default function TeamInfo({data, setData, next} : TeamInfoProps){
	console.log(data)
	return(
		<>
			<p className="text-4xl font-bold">Team Information</p>
			<input
				placeholder="Team Name"
				value={data.teamName}
				onChange={(e) => setData({ ...data, teamName: e.target.value })}
				className="w-full border border-gray-500/50 mt-8 mb-4 p-4 rounded-xl" />
			<input
				placeholder="Project Name"
				value={data.projectName}
				onChange={(e) => setData({ ...data, projectName: e.target.value })}
				className="w-full border border-gray-500/50 mb-4 p-4 rounded-xl" />
			<textarea
				placeholder="Description (optional)"
				value={data.description}
				onChange={(e) => setData({ ...data, description: e.target.value })}
				className="w-full border border-gray-500/50 mb-4 p-4 rounded-xl" />
			<div className="flex justify-end">
				<button onClick={next} className='py-4 px-6 rounded-xl text-black font-bold bg-linear-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50'>
					Continue
				</button>
			</div>
		</>
	)
}
