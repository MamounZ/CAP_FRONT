type MyButtonProps = {
	onClick: () => void
	children: React.ReactNode
}

export default function ColoredButton({ onClick, children }: MyButtonProps) {
	return (
		<button onClick={onClick} className='py-4 px-6 rounded-lg font-bold bg-linear-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:scale-105'>
			{children}
		</button>
	)
}
