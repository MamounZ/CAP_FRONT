import { useRouter } from 'next/navigation';

type AuthCardProps = {
	children: React.ReactNode
	width: string
}

export default function AuthCard({children, width}: AuthCardProps){
	const router = useRouter();
	 const handleBack = () => {
		if (window.history.length > 1) router.back();
		else router.push('/');
	};

	return (
		<div className={`relative ${width} justify-self-center`}>
			<div className="absolute -inset-3 rounded-2xl bg-cyan-400/5 blur-2xl" />
			<div className="relative z-10 rounded-xl py-12 px-8 bg-cyan-900/5 border-2 border-cyan-200/10 backdrop-blur-2xl">
				<button onClick={handleBack} className="absolute top-4 left-4 mb-4 text-sm text-cyan-400 hover:text-cyan-300">← Back</button>
				{children}
			</div>
		</div>
	)
}
