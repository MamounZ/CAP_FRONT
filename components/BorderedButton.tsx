type BorderedButtonProps = {
	onClick: () => void
	children: React.ReactNode
}

export default function BorderedButton({ onClick, children }: BorderedButtonProps) {
	return (

		<button onClick={onClick} className='py-2 px-3 md:py-4 md:px-6 md:text-lg rounded-lg font-bold border border-gray-700  transition-all hover:bg-black/70 hover:border-cyan-500/50 transform hover:scale-105'>
			{children}
		</button>
	)
}
