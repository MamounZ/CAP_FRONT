type AuthCardProps = {
	children: React.ReactNode
}


export default function AuthCard({children}: AuthCardProps){
	return (
		<div className="relative">
			<div className="relative rounded-xl py-16 px-8 bg-cyan-900/5 border-4 border-cyan-200/10 shadow-[0_0_15px_5px_rgba(59,130,246,0.5)] backdrop-blur-2xl" >
				{children}
			</div>
		</div>
	)
}
