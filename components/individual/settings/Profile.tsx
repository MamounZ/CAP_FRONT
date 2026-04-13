import BorderedButton from "@/components/BorderedButton";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import { type ChangeEvent } from "react";



export default function Profile(){

	const handleFileChosen = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		console.log(file);
	}

	return(
		<div className="space-y-8">
			<div className="bg-gray-900 rounded-lg px-4 py-6 sm:px-6 space-y-5">
				<p className="text-xl sm:text-2xl">Personal Information</p>
				<div className="grid grid-cols-1 gap-6 xl:grid-cols-5 lg:gap-4">
					<div className="lg:col-span-3 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
						<Image
							src="/assets/12345.png"
							alt="Placeholder"
							width={180}
							height={180}
							className="rounded-full overflow-hidden h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 shrink-0 border-4 border-cyan-500 object-cover"
						/>
						<div className="w-full sm:w-auto text-center sm:text-left">
							<p className="text-gray-400">Upload a new profile picture</p>
							<div className="mt-2 flex w-full justify-center sm:justify-start">
								<input
									type="file"
									accept="image/*"
									onChange={handleFileChosen}
									className="block w-full max-w-55 text-sm"
								/>
							</div>
						</div>
					</div>
					<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 justify-items-center">
						<div className="text-center">
							<p className="text-gray-500">Full Name</p>
							<p className="w-full wrap-break-word">placeholder for Full Name</p>
						</div>
						<div className="text-center">
							<p className="text-gray-500">Email</p>
							<p className="w-full wrap-break-word">placeholder for email</p>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-gray-800 border-2 border-red-200 rounded-lg px-4 py-6 sm:px-6 space-y-5">
				<div className="flex items-center gap-2 mb-4">
					<AlertCircle className="size-5 text-red-600" />
					<h3 className="text-xl sm:text-2xl font-bold text-red-600">Danger Zone</h3>
				</div>
				<p className="text-sm text-neutral-400 mb-4">
					Once you delete your account, there is no going back. Please be certain.
				</p>
				<BorderedButton onClick={() => console.log("to be replaced with the delete account api call")}>
					Delete Account
				</BorderedButton>
			</div>
		</div>
	)
}
