export default function TeamSetupForm(){
	return(
		<div className="relative sm:min-w-xl md:min-w-3xl lg:min-w-5xl justify-self-center">
			<div className="absolute -inset-3 rounded-2xl bg-cyan-400/5 blur-2xl" />
			<div className="relative z-10 rounded-xl py-12 px-8 bg-cyan-900/5 border-2 border-cyan-200/10 backdrop-blur-2xl">

				<div>
					<p className="text-4xl font-bold">Team Information</p>
					<input placeholder="Team Name" className="w-full border border-gray-500/50 mt-8 mb-4 p-4 rounded-xl" />
					<input placeholder="Project Name" className="w-full border border-gray-500/50 mb-4 p-4 rounded-xl" />
					<textarea placeholder="Description (optional)" className="w-full border border-gray-500/50 mb-8 p-4 rounded-xl" />
				</div>
				<div className="flex justify-end">
					<button className='py-4 px-6 rounded-xl text-black font-bold bg-linear-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50'>
						Start Free
					</button>
				</div>
			</div>
		</div>
	)
}
