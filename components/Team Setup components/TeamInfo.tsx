export default function TeamInfo(){
	return(
		<>
			<p className="text-4xl font-bold">Team Information</p>
			<input placeholder="Team Name" className="w-full border border-gray-500/50 mt-8 mb-4 p-4 rounded-xl" />
			<input placeholder="Project Name" className="w-full border border-gray-500/50 mb-4 p-4 rounded-xl" />
			<textarea placeholder="Description (optional)" className="w-full border border-gray-500/50 mb-4 p-4 rounded-xl" />
			<div className="flex justify-end">
				<button className='py-4 px-6 rounded-xl text-black font-bold bg-linear-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50'>
					Continue
				</button>
			</div>
		</>
	)
}
