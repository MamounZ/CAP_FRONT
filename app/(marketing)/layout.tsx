import Link from "next/link"
import Image from "next/image"

type LayoutProps = {
	children: React.ReactNode
}

export default function MarketingLayout({children}: LayoutProps){
	return (
		<div className="min-h-screen bg-black text-white flex flex-col" >
			<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
				<nav>
					<div className="mx-auto max-w-7xl px-6 py-4">
						<div className="flex items-center justify-between">
							<div className=" flex items-center gap-8">
								<Image src="/assets/CAPLogo.png" alt="logo" width={60} height={60} loading="eager" className="drop-shadow-[0_0_12px_rgba(34,211,238,0.55)] w-auto h-auto"/>
								<div className="hidden md:flex items-center gap-8">
									<a href="/#home" className="text-sm text-gray-300 hover:text-white transition-colors">
										Home
									</a>
									<a href="/#features" className="text-sm text-gray-300 hover:text-white transition-colors">
										Features
									</a>
									<a href="/#demo" className="text-sm text-gray-300 hover:text-white transition-colors">
										Demo
									</a>
									<a href="/docs" className="text-sm text-gray-300 hover:text-white transition-colors">
										Docs
									</a>
								</div>
							</div>
							<div className="flex items-center gap-4" >
								<Link href="/auth/login" className=" p-3 bg-black/50 border border-gray-700 rounded-lg text-white font-medium hover:bg-black/70 hover:border-cyan-500/50 transition-all ">
									Sign In
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</header>

			<main className="flex-1">
				{children}
			</main>

			<footer className="w-full border-t border-white/10 flex justify-center">
				<div className="mx-auto w-full max-w-7xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-sm text-gray-400">
						© 2026 CAP. All rights reserved.
					</p>
					<div className="flex items-center gap-6 text-sm">
						<Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
							Terms of Service
						</Link>
						<Link href="#PrivacyPolicy" className="text-gray-400 hover:text-white transition-colors">
							Privacy Policy
						</Link>
					</div>
				</div>
			</footer>
		</div>
	)
}
