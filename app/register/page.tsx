import AuthCard from "@/components/auth/auth-card";
import AuthLayout from "@/components/auth/auth-layout";
import Image from "next/image";

export default function RegisterPage(){
	return (
		<AuthLayout>
			<AuthCard>
				<div className="flex justify-center mb-6">
					<div className="relative inline-flex items-center justify-center">
						<div className="absolute -inset-4 rounded-full bg-cyan-400/35 blur-2xl" />
						<div className="relative z-10 rounded-2xl border border-cyan-300/30 bg-slate-900/70 p-4 shadow-lg">
							<Image src="/assets/CAPLogo.png" alt="logo" width={150} height={150} className="drop-shadow-[0_0_12px_rgba(34,211,238,0.55)]"/>
						</div>
					</div>
				</div>
				<h1 className="text-3xl text-cyan-500 font-bold text-center">Create Your Account</h1>
				<p className="text-md text-gray-300 mt-4 text-center">Start reviewing code with AI in seconds</p>
				<form className="mt-8">

				</form>
			</AuthCard>
		</AuthLayout>
	)
}
