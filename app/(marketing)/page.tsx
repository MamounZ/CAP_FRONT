"use client"
import { motion } from 'motion/react';
import { Play, Sparkles } from 'lucide-react';

export default function landingPageHero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10">
			<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
			<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl "/>
		</section>
	);
}
