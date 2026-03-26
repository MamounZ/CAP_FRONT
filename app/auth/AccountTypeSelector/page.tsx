
export default function AccountTypeSelector(){
	return (
		<div className="relative sm:min-w-2xl justify-self-center">
			<div className="absolute -inset-3 rounded-2xl bg-cyan-400/5 blur-2xl" />
			<div className="relative z-10 rounded-xl py-12 px-8 bg-cyan-900/5 border-2 border-cyan-200/10 backdrop-blur-2xl">
				<div className="flex flex-col items-center">
				<div className="text-center">
					<p className="text-4xl font-bold bg-linear-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">Choose Account Type</p>
					<p className="text-sm font-bold text-gray-500 pt-2">Select how you want to use CAP</p>
				</div>
				<div className="flex flex-col sm:flex-row gap-4 justify-between mt-12">
					<div className="border border-gray-400/50 rounded-xl bg-black hover:border-gray-400 py-10 px-8">
						<p className='font-bold text-2xl my-2'>Individual</p>
						<p className='text-gray-400 my-2'>For personal use and solo developers</p>
					</div>

					<div className="border border-cyan-400/50 rounded-xl bg-black hover:border-cyan-400 py-10 px-8">
						<p className='font-bold text-2xl my-2'>Team</p>
						<p className='text-gray-400 my-2'>For teams, collaboration, and automation</p>
						<p className='text-sm text-cyan-400 my-2'>Best for startups & dev teams</p>
					</div>
				</div>
			</div>
			</div>
		</div>
	)
}
