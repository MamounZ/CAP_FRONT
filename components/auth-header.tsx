type AuthHeaderProps = {
	title: string
	subtitle: string
}

export default function AuthHeader({title, subtitle}: AuthHeaderProps){
	return (
		<>
			<h1 className="text-3xl text-cyan-500 font-bold text-center">{title}</h1>
			<p className="text-md text-gray-300 mt-4 text-center">{subtitle}</p>
		</>
	)
}
