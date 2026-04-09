"use client"

import { useState } from "react";
import { User, Brain, Bell } from 'lucide-react';
import Profile from "@/components/individual/settings/Profile";

export default function settings(){
	const [tab, setTab] = useState("Profile")

	return(
		<div className="flex flex-col sm:flex-row h-30 gap-8">

			<div className="flex sm:flex-col bg-gray-900 rounded-lg px-4 py-2 w-full sm:max-w-sm justify-around">
				<button className="w-full ">
					<div onClick={() => setTab("Profile")} className={`flex items-center gap-2 sm:gap-6 rounded-full px-2 py-1 ${tab === "Profile" ? "bg-cyan-500 text-black  shadow-lg shadow-cyan-500/30" : ""}`}>
						<User size={18} className="mx-auto sm:mx-0"/>
						<p className="hidden sm:block">Profile</p>
					</div>
				</button>
				<button onClick={() => setTab("AI Preferences")} className="w-full ">
					<div className={`flex items-center gap-2 sm:gap-6 rounded-full px-2 py-1 ${tab === "AI Preferences" ? "bg-cyan-500 text-black  shadow-lg shadow-cyan-500/30" : ""}`}>
						<Brain size={18} className="mx-auto sm:mx-0"/>
						<p className="hidden sm:block">AI Preferences</p>
					</div>
				</button>
				<button onClick={() => setTab("Notification")} className="w-full ">
					<div className={`flex items-center gap-2 sm:gap-6 rounded-full px-2 py-1 ${tab === "Notification" ? "bg-cyan-500 text-black  shadow-lg shadow-cyan-500/30" : ""}`}>
						<Bell size={18} className="mx-auto sm:mx-0"/>
						<p className="hidden sm:block">Notification</p>
					</div>
				</button>
			</div>

			<div className="w-full">
				{(tab === "Profile") && (
					<Profile/>
				)}
			</div>

		</div>
	)
}
