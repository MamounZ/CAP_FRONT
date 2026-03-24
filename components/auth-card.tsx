type AuthCardProps = {
	children: React.ReactNode
}


export default function AuthCard({children}: AuthCardProps){
	return (
		<div className="relative">
			<div className="absolute -inset-3 rounded-2xl bg-cyan-400/5 blur-2xl" />
			<div className="relative z-10 rounded-xl py-12 px-8 bg-cyan-900/5 border-2 border-cyan-200/10 backdrop-blur-2xl">
				{children}
			</div>
		</div>
	)
}
