"use client"

import { Plus } from 'lucide-react';
import { useState } from 'react'
import { mockProjects } from '@/app/data/mockData';
import ProjectCard from '@/components/team/ProjectCard';

export default function TeamProjects(){
	const [ addProject, setAddProject] = useState(false)

	return (
		<div className="flex flex-col gap-8 overflow-clip ">
			<div className="bg-gray-900 px-4 md:px-8 py-4 rounded-xl border border-gray-500/50">
				<div className="flex justify-between gap-2">
					<div className="space-y-3">
						<p className="text-xl md:text-3xl">Team Projects</p>
						<p className="text-gray-500 text-sm md:text-md">Manage and monitor your team's projects</p>
					</div>
					<button onClick={() => setAddProject(true)} className='flex items-center md:gap-4 p-1 md:px-4 bg-blue-600 rounded-xl md:text-xl hover:bg-blue-800 transition-colors'><Plus/>New Project</button>
				</div>
			</div>

			<div className='grid w-full grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6'>
				{
					mockProjects.map((project) => {
						return(
							<ProjectCard key={project.id} name = {project.name} language = {project.language} score = {project.score} issues = {project.issues} lastScan = {project.lastScan}/>
						)
					})
				}
			</div>



			{/* {addProject && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6">
					<div className="h-auto w-full max-w-sm rounded-xl bg-gray-900 p-5 sm:max-w-lg sm:p-6 lg:max-w-2xl lg:p-8">
						<p className="text-xl">Invite Team Member</p>

						<div className="my-4 space-y-2">
							<p className="text-sm text-gray-500">Email Address</p>
							<input type="email" placeholder="member@example.com" className="bg-black/50 p-4 rounded-xl w-full" />
						</div>

						<div className="my-4 space-y-2">
							<p className="text-sm text-gray-500">role</p>
							<select className="bg-black/50 p-4 rounded-xl w-full">
								<option value="Developer" className="bg-black/80 text-white">Developer</option>
								<option value="Admin" className="bg-black/80 text-white">Admin</option>
								<option value="Viewer" className="bg-black/80 text-white">Viewer</option>
							</select>
						</div>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
							<button onClick={() => setAddProject(false)} className="w-full rounded-xl border border-gray-500/50 p-4 text-gray-500 transition-colors hover:border-gray-600 hover:text-white">
								Cancel
							</button>
							<button className="w-full rounded-xl bg-blue-600 p-4 transition-colors hover:bg-blue-800">
								Send Invite
							</button>
						</div>

					</div>
				</div>
			)}*/}
		</div>
	)
}
