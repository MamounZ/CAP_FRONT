import { Github, Code2, Shield, Zap, FileSearch, TrendingUp } from 'lucide-react';
import AuthLogo from './auth/auth-logo';
import GithubButton from './auth/GithubButton';

export function GitHubOnboarding() {
	const features = [
		{
			icon: Code2,
			title: 'Automated Code Review',
			description: 'Get instant AI-powered code reviews with detailed suggestions and best practices.',
		},
		{
			icon: Shield,
			title: 'Security Analysis',
			description: 'Identify vulnerabilities and security issues before they reach production.',
		},
		{
			icon: Zap,
			title: 'Fast & Efficient',
			description: 'Review entire repositories in seconds with our advanced AI algorithms.',
		},
		{
			icon: FileSearch,
			title: 'Deep Code Inspection',
			description: 'Line-by-line analysis with context-aware suggestions and fixes.',
		},
		{
			icon: TrendingUp,
			title: 'Track Progress',
			description: 'Monitor your code quality improvements with comprehensive analytics.',
		},
	];

	return (
		<div className="min-h-screen bg-linear-to-br from-[#0A2463] via-[#0d2d7a] to-[#0A2463] flex items-center justify-center p-4">
			<div className="max-w-5xl w-full">
				{/* Logo */}
				<div className="flex flex-col items-center mb-12">
					{/* <img src={logo} alt="CAP Logo" className="h-20 mb-4" /> */}
					<AuthLogo />
					<h1 className="text-4xl font-bold text-white mb-2">Welcome to Code Agent Platform</h1>
					<p className="text-cyan-300 text-lg">Your AI-Powered Code Review Assistant</p>
				</div>

				{/* Main Card */}
				<div className="bg-[#1a1a2e] border-2 border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden">
					{/* Content */}
					<div className="p-8 md:p-12">
						{/* Call to Action */}
						<div className="text-center mb-12">
							<h2 className="text-2xl font-bold text-white mb-4">
								Connect Your GitHub Account to Get Started
							</h2>
							<p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
								Connect your GitHub account to access all repositories and start reviewing your code with our powerful AI-driven analysis tools.
							</p>

							{/* <button
								onClick={onConnect}
								className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-cyan-400 to-cyan-500 text-[#0A2463] font-bold rounded-xl hover:from-cyan-300 hover:to-cyan-400 transition-all shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transform hover:scale-105"
							>
								<Github className="size-6" />
								<span>Connect to GitHub</span>
							</button> */}
							<GithubButton />
						</div>

						{/* Features Grid */}
						<div className="mt-12 pt-12 border-t border-neutral-700">
							<h3 className="text-xl font-bold text-white mb-8 text-center">
								What You'll Get Access To
							</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{features.map((feature) => {
									const Icon = feature.icon;
									return (
										<div
											key={feature.title}
											className="bg-[#0A2463]/50 border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all"
										>
											<div className="flex items-center gap-3 mb-3">
												<div className="size-10 rounded-lg bg-linear-to-br from-cyan-400 to-cyan-500 flex items-center justify-center">
													<Icon className="size-5 text-[#0A2463]" />
												</div>
												<h4 className="font-semibold text-white">{feature.title}</h4>
											</div>
											<p className="text-sm text-neutral-400">{feature.description}</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>

					{/* Footer */}
					<div className="bg-[#0A2463]/50 border-t border-cyan-500/20 px-8 py-6">
						<p className="text-center text-sm text-neutral-400">
							By connecting your GitHub account, you agree to our Terms of Service and Privacy Policy.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
