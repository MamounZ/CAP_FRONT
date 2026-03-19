import Image from "next/image";

export default function AuthLogo(){
	return (
		<div className="flex justify-center mb-6">
			<div className="relative inline-flex items-center justify-center">
				<div className="absolute -inset-4 rounded-full bg-cyan-400/35 blur-2xl" />
				<div className="relative z-10 rounded-2xl border border-cyan-300/30 bg-slate-900/70 p-2 shadow-lg">
					<Image src="/assets/CAPLogo.png" alt="logo" width={200} height={200} loading="eager" className="drop-shadow-[0_0_12px_rgba(34,211,238,0.55)] w-auto h-auto"/>
				</div>
			</div>
		</div>
	)
}
