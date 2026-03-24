"use client"
import { motion } from 'motion/react';
import { Play, Sparkles } from 'lucide-react';

export default function landingPageHero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10">
			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
			<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
			<div className='relative z-20 max-w-7xl px-6 py-24 text-center flex flex-col items-center'>
				<div className='w-3xs border border-cyan-500/30 rounded-full px-4 py-2 bg-cyan-500/10 text-cyan-400 flex gap-2'>
					<Sparkles/>
					Powered by Advanced AI
				</div>
				<p className='text-7xl text-cyan-100 font-bold pt-8'>Review Code Smarter</p>
				<p className='text-7xl text-cyan-400 font-bold'>Ship Faster with AI</p>
				<p className='max-w-2xl text-lg sm:text-xl text-gray-400 pt-8 '>AI-powered code analysis that detects security issues, optimizes performance, and refactors your codebase—all in real-time with inline PR reviews.</p>
				<button className='mt-8 py-4 px-6 rounded-lg text-black font-bold bg-linear-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50'>
					Start Free
				</button>
			</div>
		</section>
	);
}
