import FeaturesCard from "../FeaturesCard";
import { Shield, Zap, Code2, GitPullRequest, MessageSquare } from 'lucide-react';

export default function Features(){
	return (
		<section id="features" className="pt-32 flex flex-col items-center">
			<p className="text-7xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent text-center">
				Powerful Features
			</p>
			<p className="max-w-2xl text-lg sm:text-xl text-gray-400 mt-8 text-center">
				Everything you need to ship secure, performant code faster
			</p>
			<div className="my-16 grid w-full max-w-400 grid-cols-1 gap-8 px-6 md:grid-cols-3">
				<FeaturesCard glowColor="bg-red-300/20" iconColor="bg-red-400" title="Security Detection" description="Automatically identify vulnerabilities, SQL injections, XSS attacks, and other security risks in your codebase." Icon={Shield}/>
				<FeaturesCard glowColor="bg-yellow-300/20" iconColor="bg-yellow-400" title="Performance Insights" description="Get real-time recommendations to optimize runtime, reduce memory usage, and improve load times." Icon={Zap}/>
				<FeaturesCard glowColor="bg-green-300/20" iconColor="bg-green-400" title="Clean Code Refactor" description="AI-powered refactoring suggestions to improve code quality, readability, and maintainability." Icon={Code2}/>
				<FeaturesCard glowColor="bg-blue-300/20" iconColor="bg-blue-400" title="Inline PR Review" description="Seamless integration with GitHub PRs. Get instant AI feedback directly in your pull requests." Icon={GitPullRequest}/>
				<FeaturesCard glowColor="bg-purple-300/20" iconColor="bg-purple-400" title="AI Chat Assistant" description="Ask questions about your code, get explanations, and receive contextual suggestions through natural conversation." Icon={MessageSquare}/>
			</div>
		</section>
	)
}
