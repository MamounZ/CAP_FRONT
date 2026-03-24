import type { LucideIcon } from 'lucide-react';

type HowItWorksCardProps = {
	step: number;
	title: string;
	description: string;
	Icon: LucideIcon;
};

export default function HowItWorksCard({step, title, description, Icon}: HowItWorksCardProps){
	return(
		<div className="relative flex justify-center items-center">
			<div className='absolute -top-4 -left-4 z-10 w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-xl'>{step}</div>
			<div className="absolute inset-8 bg-cyan-300/20 blur-3xl"/>
			<div className="relative border border-gray-400/20 rounded-xl bg-black hover:bg-black/10 max-w-3xl p-10">
				<div className='inline-flex justify-center items-center bg-cyan-400 rounded-xl w-20 h-20'>
					<Icon className='w-10 h-10'/>
				</div>
				<p className='font-bold text-2xl my-2'>{title}</p>
				<p className='text-xl text-gray-400 my-2'>{description}</p>
			</div>
		</div>
	)
}
