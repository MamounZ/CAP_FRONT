export default function TeamMembers(){
	return(
		<>
			<p className="text-4xl font-bold">Team Members</p>
			<p className="text-lg text-gray-500 mt-2">Add members using GitHub or email. You can invite them later using a shareable link.</p>
			<div className="border rounded-2xl mt-8 mb-4 p-4 bg-white/5 border-white/10 text-gray-500">
				💡 Tip: You can invite teammates by email or share a private invite link after creating the team.
			</div>
			<div className="flex justify-between">
				<button className='my-4 mx-6 font-bold text-gray-500 hover:text-gray-300'>
					Back
				</button>
				<button className='py-4 px-6 rounded-xl text-black font-bold bg-linear-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50'>
					Continue
				</button>
			</div>
		</>
	)
}
