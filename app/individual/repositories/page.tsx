"use client"
import CodeViewer from "@/components/individual/CodeViewer";
import IndividualRepositoriesCard from "@/components/individual/IndividualRepositoriesCard";

export default function IndividualRepositories(){
	return(
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
			<IndividualRepositoriesCard name="project" description="this is a project"  language="java script" stars={50} forks={88} lastUpdated="2 hours" isPrivate={true} />
			<IndividualRepositoriesCard name="project" description="this is a project"  language="java script" stars={50} forks={88} lastUpdated="2 hours" isPrivate={true} />
			<IndividualRepositoriesCard name="project" description="this is a project"  language="java script" stars={50} forks={88} lastUpdated="2 hours" isPrivate={true} />
		</div>
		// <CodeViewer/>
	)
}
