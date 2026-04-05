import { FolderGit2, GitBranch, AlertCircle, Clock, MessageSquare } from 'lucide-react';
import { ProjectGithubStatusBadge } from './ProjectGithubStatusBadge';

type ProjectCardProps = {
	name: string
	language: string
	score: number
	issues: number
	lastScan: string
}

export default function ProjectCard({name, language, score, issues, lastScan}: ProjectCardProps){
	return(
		<div className='w-full overflow-clip min-w-2xs'>
					<div className="bg-gray-900 px-8 py-6 rounded-xl border border-gray-500/50">
						<div className='flex justify-between gap-1'>
							<div className='flex items-center gap-4'>
								<FolderGit2 className='text-blue-700 size-8'/>
								<div>
									<p className='text-xl'>{name}</p>
									<p className='text-sm text-gray-500'>{language}</p>
								</div>
							</div>
							<ProjectGithubStatusBadge status='Connected' />
						</div>
							<div className='flex justify-between'>
								<div className='flex items-center gap-2 mt-4'>
								<GitBranch className='text-gray-500 size-5'/>
								<div>
									<p className='text-xs text-gray-500'>Score</p>
									<p className='text-sm'>{score}/100</p>
								</div>
							</div>
							<div className='flex items-center gap-2 mt-4'>
								<AlertCircle className='text-gray-500 size-5'/>
								<div>
									<p className='text-xs text-gray-500'>Issues</p>
									<p className='text-sm'>{issues}</p>
								</div>
							</div>
						</div>
						<div className='flex gap-2 mt-4'>
							<Clock className='text-gray-500 size-5'/>
							<p className='text-sm text-gray-500'>{lastScan}</p>
						</div>
					</div>
					<div className='flex justify-center gap-2 mt-2'>
						<button className='bg-blue-600 rounded-xl hover:bg-blue-800 transition-colors p-4 '>Open</button>
						<button className='border border-gray-500/50 rounded-xl text-gray-500 hover:text-white hover:border-white p-4 transition-colors'><MessageSquare className='size-5' /></button>
						<button className='border border-gray-500/50 rounded-xl text-gray-500 hover:text-white hover:border-white p-4 transition-colors'>Run Review</button>
					</div>
				</div>
	)
}
