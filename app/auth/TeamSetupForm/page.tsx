import TeamInfo from "@/components/Team Setup components/TeamInfo";
import TeamMembers from "@/components/Team Setup components/TeamMembers";

export default function TeamSetupForm(){
	return(
		<div className="relative sm:min-w-xl md:min-w-3xl lg:min-w-5xl rounded-xl justify-self-center shadow-2xl shadow-cyan-500/10">
			<div className="absolute -inset-3 rounded-xl bg-cyan-400/5 blur-2xl" />
			<div className="relative z-10 rounded-xl py-12 px-8 bg-cyan-900/5 border-2 border-cyan-200/10 backdrop-blur-2xl">
				<div>
					{/* <TeamInfo /> */}
					<TeamMembers/>
				</div>
			</div>
		</div>
	)
}
