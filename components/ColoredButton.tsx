type MyButtonProps = {
	onClick: () => void
	children: React.ReactNode
}

export default function ColoredButton({ onClick, children }: MyButtonProps) {
	return (
		<button onClick={onClick} className='py-2 px-3 md:py-4 md:px-6 md:text-lg rounded-lg font-bold bg-linear-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:scale-105'>
			{children}
		</button>
	)
}
