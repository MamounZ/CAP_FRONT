import { Github } from 'lucide-react';

export default function GithubButton(){

	function handleGithubSignUp(){
		console.log("GithubSignUp")
	}

	return (
		<button onClick={() => handleGithubSignUp()} className="w-full py-3 bg-black/50 border border-gray-700 rounded-lg text-white font-medium hover:bg-black/70 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2">
			<Github className="w-5 h-5" />
			Continue with GitHub
		</button>
	)
}
