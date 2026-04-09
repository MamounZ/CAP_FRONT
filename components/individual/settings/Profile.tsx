import Image from "next/image";
import type { ChangeEvent } from "react";

export default function Profile(){

	const handleFileChosen = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		console.log(file);
	}

	return(
		<div>
			<div className="bg-gray-900 rounded-lg px-4 py-6 space-y-4">
				<p className="text-2xl">Personal Information</p>
				<div className="grid grid-cols-1 sm:grid-cols-5">
					<div className="flex items-center gap-4 col-span-3">
						<Image src="/assets/12345.png" alt="Placeholder" width={180} height={180} className="rounded-full overflow-hidden w-25 h-25 shrink-0 border-4 border-cyan-500"/>
						<div>
							<p className="text-gray-500">Upload a new profile picture</p>
							<input type="file" accept="image/*" onChange={handleFileChosen}/>
						</div>
					</div>
					<div className="flex items-center gap-8 col-span-2">
						<div>
							<p className="text-gray-500">Full Name</p>
							<p className="w-full">placeholder for Full Name</p>
						</div>
						<div>
							<p className="text-gray-500">Email</p>
							<p className="w-full">placeholder for  email</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
