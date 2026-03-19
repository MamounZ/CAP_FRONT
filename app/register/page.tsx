"use client"
import AuthCard from "@/components/auth/auth-card";
import AuthHeader from "@/components/auth/auth-header";
import AuthLayout from "@/components/auth/auth-layout";
import AuthLogo from "@/components/auth/auth-logo";
import Image from "next/image";
import {useState} from "react"

export default function RegisterPage(){
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState<string | null>(null)

	function handleSubmit(event : React.FormEvent){
		event.preventDefault();
		setError(null);
		setEmail(email.trim())
		if (!email || !password || !confirmPassword){
			setError("Please fill in all fields")
			return
		}

		if(password.length < 8){
			setError("Password must be at least 8 characters")
			return
		}

		if(password !== confirmPassword){
			setError("Passwords do not match")
			return
		}

		console.log("email", email)
		console.log("password", password)
	}

	return (
		<AuthLayout>
			<AuthCard>
				<AuthLogo />
				<AuthHeader title="Create Your Account" subtitle="Start reviewing code with AI in seconds"/>
				{error && (
					<div className="mt-6 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
						{error}
					</div>
				)}
				<form onSubmit={handleSubmit} className="mt-6">
					<div>
						<label htmlFor="email" className="block text-sm mb-2 text-gray-300">
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
					<div className="mt-4">
						<label htmlFor="confirmPassword" className="block text-sm mb-2 text-gray-300">
							Confirm Password
						</label>
						<input
							id="confirmPassword"
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							placeholder="Confirm your password"
							className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
						/>
					</div>
					<button type="submit" className="w-full mt-10 px-4 py-3 rounded-lg text-black font-bold bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50">
						Sign Up
					</button>
				</form>
			</AuthCard>
		</AuthLayout>
	)
}
