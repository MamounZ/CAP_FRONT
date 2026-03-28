import { TeamSetupData } from "@/types/TeamSetupData"

type ReviewRulesProps = {
	data: TeamSetupData
	setData: (data: TeamSetupData) => void
	next: () => void
	back: () => void
}

const allRules = [
  "Security",
  "Performance",
  "Memory leaks",
  "Clean code",
  "Best practices",
  "Framework-specific rules",
];

export default function ReviewRules({data, setData, next, back} : ReviewRulesProps){
	const toggleRule = (rule: string) => {
		setData({...data,rules: data.rules.includes(rule) ? data.rules.filter(r => r !== rule) : [...data.rules, rule]});
	}

	const selectAllRules = () => {
		setData({...data,mode: "auto", rules: allRules});
	}

	console.log(data.rules)
	return(
		<>
			<p className="text-4xl font-bold">Review Rules</p>
			<p className="text-gray-500 mt-2">Choose how CAP should analyze your code</p>

			<p className="text-lg font-bold mt-12">Review Mode</p>

			<div className="flex flex-col md:flex-row justify-center items-stretch gap-4 my-8">
				<div
				className={`flex-1 w-full rounded-xl p-10 md:max-w-none border ${data.mode === "auto" ? "border-cyan-400/50 bg-cyan-900/30" : "border-gray-400/20 bg-black"}`}
				onClick={() => selectAllRules()}
				>

					<p className='font-bold text-2xl my-2'>Auto AI Review</p>
					<p className='text-xl text-gray-400 my-2'>CAP will automatically apply all best practices and checks</p>
				</div>
				<div className={`flex-1 w-full rounded-xl p-10 md:max-w-none border ${data.mode === "custom" ? "border-cyan-400/50 bg-cyan-900/30" : "border-gray-400/20 bg-black"}`}
				onClick={() => setData({...data, mode: "custom"})}
				>
					<p className='font-bold text-2xl my-2'>Custom Rules</p>
					<p className='text-xl text-gray-400 my-2'>Select specific rules to apply during review</p>
				</div>
			</div>

			{data.mode === "custom" && (
				 <div>
					{allRules.map(rule => (
						<label
						key={rule}
						className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3 my-3 cursor-pointer"
						>
							<input
							type="checkbox"
							checked={data.rules.includes(rule)}
							onChange={() => toggleRule(rule)}
							/>
							<span>{rule}</span>
						</label>
					))}
				</div>
			)}



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
