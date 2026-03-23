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
					<div className="mx-auto max-w-7xl p-6">
						<div className="flex items-center justify-between">
							<div className=" flex items-center gap-8">
								<Image src="/assets/CAPLogo.png" alt="logo" width={72} height={72} loading="eager" className="drop-shadow-[0_0_12px_rgba(34,211,238,0.55)] w-auto h-auto"/>
								<div className="hidden md:flex items-center gap-8">
									<Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
										Home
									</Link>
									<Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
										Features
									</Link>
									<Link href="#demo" className="text-sm text-gray-300 hover:text-white transition-colors">
										Demo
									</Link>
									<Link href="#pricing-page" className="text-sm text-gray-300 hover:text-white transition-colors">
										Pricing
									</Link>
									<Link href="#docs" className="text-sm text-gray-300 hover:text-white transition-colors">
										Docs
									</Link>
								</div>
							</div>
							<div className="flex items-center gap-4" >
								<Link href="/login" className=" p-3 bg-black/50 border border-gray-700 rounded-lg text-white font-medium hover:bg-black/70 hover:border-cyan-500/50 transition-all ">
									Sign In
								</Link>
							</div>
						</div>
					</div>

				</nav>
			</header>
			{children}
			<footer>

			</footer>
		</div>
	)
}
