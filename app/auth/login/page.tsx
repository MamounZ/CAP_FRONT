"use client"
import AuthCard from "@/components/auth-card";
import Divider from "@/components/auth-divider";
import AuthHeader from "@/components/auth-header";
import AuthInput from "@/components/auth-input";
import AuthLogo from "@/components/auth-logo";
import GithubButton from "@/components/GithubButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthStore } from "@/store/auth-store";

export default function LoginPage(){
	const router = useRouter();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	// const [error, setError] = useState<string | null>(null)

	const { loginUser, isLoading, error, clearError } = useAuthStore();

	async function handleSubmit(event : React.FormEvent){
		event.preventDefault();
		clearError();

		if (!email.trim() || !password){
			// setError("Please fill in all fields")
			return
		}

		console.log("email", email)
		console.log("password", password)

		const success = await loginUser({
			email: email.trim().toLowerCase(),
			password,
		});

		if (success) {
			router.push("/dashboard");
		}
	}


	return (
		<AuthCard width="sm:min-w-md">
			<AuthLogo />
			<AuthHeader title="Welcome Back" subtitle="Sign in to continue to your dashboard"/>
			{error && (
				<div className="mt-6 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
					{error}
				</div>
			)}
			<form onSubmit={handleSubmit}>
				<AuthInput id="email" type="email" label="Email" placeholder="you@example.com" state={email} setState={setEmail}/>
				<AuthInput id="password" type="password" label="Password" placeholder="Enter your password" state={password} setState={setPassword}/>
				<div className="flex justify-end mt-2">
					<Link href="#forgot-password" className="text-sm text-cyan-400 hover:text-cyan-200 transition-colors">
						Forgot password?
					</Link>
				</div>
				<button type="submit" disabled={isLoading} className="w-full mt-4 px-4 py-3 rounded-lg text-black font-bold bg-linear-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 disabled:opacity-50">
					{isLoading ? "Signing in..." : "Sign In"}
				</button>
			</form>
			<Divider />
			<GithubButton/>
			<div className="mt-6 text-center">
				<p className="text-gray-400">
					Don't have an account?{' '}
					<Link href="/auth/AccountTypeSelector" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
						Start Free
					</Link>
				</p>
			</div>
		</AuthCard>
	)
}
