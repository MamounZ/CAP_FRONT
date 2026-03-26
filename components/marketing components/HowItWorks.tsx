import { Upload, Sparkles, FileCheck } from 'lucide-react';
import HowItWorksCard from '../HowItWorksCard';

export default function HowItWorks(){
	return (
		<section className="pt-32 flex flex-col items-center">
			<p className="text-7xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent text-center">
				How It Works
			</p>
			<p className="max-w-2xl text-lg sm:text-xl text-gray-400 mt-8 text-center">
				Get started in minutes with our streamlined three-step process
			</p>
			<div className="my-16 grid w-full max-w-400 grid-cols-1 gap-8 px-6 md:grid-cols-3">
				<HowItWorksCard step={1} title="Upload / Connect GitHub" description="Connect your repository or upload code directly. Seamlessly integrate with your existing workflow." Icon={Upload}/>
				<HowItWorksCard step={2} title="AI Analysis" description="Our advanced AI scans your code for security vulnerabilities, performance issues, and potential bugs." Icon={Sparkles}/>
				<HowItWorksCard step={3} title="Get Insights + Refactor" description="Receive detailed security reports, performance metrics, and automated code refactoring suggestions." Icon={FileCheck}/>
			</div>
		</section>
	)
}
