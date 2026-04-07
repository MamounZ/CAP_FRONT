type BorderedButtonProps = {
	onClick: () => void
	children: React.ReactNode
}

export default function BorderedButton({ onClick, children }: BorderedButtonProps) {
	return (

		<button onClick={onClick} className='py-4 px-6 rounded-lg font-bold border border-gray-700  transition-all hover:bg-black/70 hover:border-cyan-500/50 transform hover:scale-105'>
			{children}
		</button>
	)
}
