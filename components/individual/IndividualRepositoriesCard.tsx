import { Search, RefreshCw, FolderGit2, Star, GitFork, Clock } from 'lucide-react';
import ColoredButton from '../ColoredButton';
import { useRouter } from 'next/navigation';


type IndividualRepositoriesCardProps = {
	name: string
	description: string
	language: string
	stars: number
	forks: number
	lastUpdated: string
	isPrivate: boolean
}

export default function IndividualRepositoriesCard({name, description, language ,stars ,forks ,lastUpdated ,isPrivate} : IndividualRepositoriesCardProps){
	const router = useRouter();

	return (
		<div className="bg-gray-900 px-8 py-6 rounded-xl border border-gray-500/50">
			<div className='flex justify-between gap-1'>
				<div className='flex items-center gap-4'>
					<div className='bg-linear-to-r from-cyan-500 to-teal-500 p-2 rounded-lg'>
						<FolderGit2 className='text-white size-8'/>
					</div>
					<div>
						<p className='text-xl'>{name}</p>
						<p className='text-sm text-gray-500'>{language}</p>
					</div>
				</div>
				{
					isPrivate && (	<div className='px-3 py-1 rounded text-xs border w-fit h-fit bg-yellow-500/10 text-yellow-400 border-yellow-500/20}'>
										Private
									</div>)
				}
			</div>
			<p className='mt-4 text-gray-500 text-lg'>{description}</p>
			<div className='flex justify-between'>
				<div className='flex gap-4'>
					<div className='flex items-center gap-2 mt-4'>
						<div className='border-6 rounded-full border-blue-500'/>
						<p className='text-sm text-gray-500'>{language}</p>
					</div>
					<div className='flex items-center gap-2 mt-4'>
						<Star className='text-gray-500 size-5'/>
						<p className='text-sm text-gray-500'>{stars}</p>
					</div>
					<div className='flex items-center gap-2 mt-4'>
						<GitFork className='text-gray-500 size-5'/>
						<p className='text-sm text-gray-500'>{forks}</p>
					</div>
				</div>
				<div className='flex items-center gap-2 mt-4'>
					<Clock className='text-gray-500 size-5'/>
					<p className='text-xs text-gray-500'>{lastUpdated}</p>
				</div>
			</div>
			<div className='mt-6 flex justify-center w-full'>
				<ColoredButton onClick={() => router.push("/individual/repositories/codeViewer")}>Start Review</ColoredButton>
			</div>
		</div>
	)
}
