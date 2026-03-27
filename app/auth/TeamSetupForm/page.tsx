"use client"
import { useState } from "react";
import TeamInfo from "@/components/Team Setup components/TeamInfo";
import TeamMembers from "@/components/Team Setup components/TeamMembers";
import { TeamSetupData } from "@/types/TeamSetupData";

export default function TeamSetupForm(){
	const [step, setStep] = useState(1)
	const [data, setData] = useState<TeamSetupData>({
		teamName: "",
		projectName: "",
		description: "",

		members: [
			{
				name: "",
				github: "",
				email: "",
				role: "Owner",
				type: "manual",
			},
		],

		rules: ["Security", "Performance", "Clean code"],
		customRules: [""],

		repo: "",
		branch: "main",
		mode: "auto",

		prReview: false,
		commitReview: false,
		trigger: "on-push",
		schedule: "daily",
		autoFix: false,
		level: "balanced",

		emailNotification: true,
		appNotification: true,
		webhook: "",

		editRules: "Owner only",
		approve: "Owner",

		deadline: "",
	});



	const next = () => setStep((s) => s + 1);
	const back = () => setStep((s) => s - 1);
	return(
		<div className="relative sm:min-w-xl md:min-w-3xl lg:min-w-5xl rounded-xl justify-self-center shadow-2xl shadow-cyan-500/10">
			<div className="absolute -inset-3 rounded-xl bg-cyan-400/5 blur-2xl" />
			<div className="relative z-10 rounded-xl p-8 bg-cyan-900/5 border-2 border-cyan-200/10 backdrop-blur-2xl">
				<p className="text-gray-500 text-lg mb-4">Step {step} / 4</p>
				<div>
					{step === 1 && (<TeamInfo data={data} setData={setData} next={next}/>)}
					{step === 2 && (<TeamMembers data={data} setData={setData} next={next} back={back}/>)}
				</div>
			</div>
		</div>
	)
}
