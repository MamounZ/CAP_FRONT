"use client"
import AuthCard from "@/components/auth/auth-card";
import AuthHeader from "@/components/auth/auth-header";
import AuthLayout from "@/components/auth/auth-layout";
import AuthLogo from "@/components/auth/auth-logo";
import Image from "next/image";
import { useState } from "react"

export default function LoginPage(){
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState<string | null>(null)

	function handleSubmit(event : React.FormEvent){
		event.preventDefault();
		setError(null);
		setEmail(email.trim())
		if (!email || !password){
			setError("Please fill in all fields")
			return
		}
		console.log("email", email)
		console.log("password", password)
	}


	return (
		<AuthLayout>
			<AuthCard>
				<AuthLogo />
				<AuthHeader title="Welcome Back" subtitle="Sign in to continue to your dashboard"/>
				{error && (
					<div className="mt-6 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
						{error}
					</div>
				)}
				<form onSubmit={handleSubmit} className="mt-6">
					<div>
						<label  htmlFor="email" className="block text-sm mb-2 text-gray-300">
							Email
						</label>
						<input
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="you@example.com"
							className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
						/>
					</div>
					<div className="mt-4">
						<label htmlFor="password" className="block text-sm mb-2 text-gray-300">
							Password
						</label>
						<input
							id="password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Enter your password"
							className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
						/>
					</div>
					<div className="flex justify-end mt-2">
						<a href="#forgot-password" className="text-sm text-cyan-400 hover:text-cyan-200 transition-colors">
							Forgot password?
						</a>
					</div>
					<button type="submit" className="w-full mt-4 px-4 py-3 rounded-lg text-black font-bold bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50">
						Sign In
					</button>
				</form>
			</AuthCard>
		</AuthLayout>
	)
}
