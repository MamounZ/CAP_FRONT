type AuthLayoutProps = {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
	<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-10">
		<div className="absolute -left-15 -top-15 rounded-full w-52 h-52 bg-cyan-700/40 blur-3xl"/>
		<div className="absolute -right-15 -bottom-15 rounded-full w-80 h-80 bg-teal-600/20 blur-3xl"/>
		<div className="absolute rounded-full w-52 h-52 bg-cyan-400/20 blur-3xl"/>
		<div className="relative z-10 w-full max-w-md">{children}</div>
	</main>
  )
}
