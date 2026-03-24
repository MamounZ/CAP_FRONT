"use client"
import { Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function LandingPageHero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10">
			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
			<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
			<div className='relative z-20 max-w-7xl px-6 py-24 text-center flex flex-col items-center gap-8'>
				<div className='w-3xs border border-cyan-500/30 rounded-full px-4 py-2 bg-cyan-500/10 text-cyan-400 flex gap-2'>
					<Sparkles/>
					Powered by Advanced AI
				</div>
				<div className='flex flex-col items-center gap-2'>
					<p className='text-7xl text-cyan-100 font-bold'>Review Code Smarter</p>
					<p className='text-7xl text-cyan-400 font-bold'>Ship Faster with AI</p>
				</div>
				<p className='max-w-2xl text-lg sm:text-xl text-gray-400'>AI-powered code analysis that detects security issues, optimizes performance, and refactors your codebase—all in real-time with inline PR reviews.</p>
				<button className='mt-8 py-4 px-6 rounded-lg text-black font-bold bg-linear-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50'>
					Start Free
				</button>
				<div className='w-full max-w-5xl border border-white/10 rounded-xl bg-black/50 backdrop-blur-xl shadow-2xl shadow-cyan-500/15 overflow-hidden'>
					<div className='flex items-center gap-1.5 py-6 px-6'>
						<div className='bg-red-500 rounded-full h-4 w-4'></div>
						<div className='bg-yellow-500 rounded-full h-4 w-4'></div>
						<div className='bg-green-500 rounded-full h-4 w-4'></div>
						<p className='ml-4 text-sm text-gray-500'>src/components/auth.ts</p>
					</div>
					<div>
						<Image
						src="/assets/Code preview.jpeg"
						width={1080}
						height={720}
						alt="Code preview"
						className="w-full h-72 object-cover rounded-lg opacity-80"/>
					</div>
				</div>
			</div>
		</section>
	);
}
