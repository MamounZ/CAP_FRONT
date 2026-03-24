type AuthInputProps = {
	id: string
	type: string
	label: string
	placeholder: string
	state: string
	setState: React.Dispatch<React.SetStateAction<string>>
}

export default function AuthInput({id, type, label, placeholder, state, setState}: AuthInputProps){
	return(
		<div className="mt-4">
			<label htmlFor={id} className="block text-sm mb-2 text-gray-300">
				{label}
			</label>
			<input
				id={id}
				type={type}
				value={state}
				onChange={(e) => setState(e.target.value)}
				placeholder={placeholder}
				className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
			/>
		</div>
	)
}
