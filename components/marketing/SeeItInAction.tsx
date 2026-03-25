import Image from 'next/image';
import { AlertCircle, CheckCircle2, Code } from 'lucide-react';

export default function SeeItInAction(){
	const codeSnippet =`function getUserData(userId) {
	   const query = "SELECT * FROM users WHERE id=" + userId;
	   return db.execute(query);
}`;
	return (
		<section className="pt-32 flex flex-col items-center">
			<p className="text-7xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent text-center">
				See It In Action
			</p>
			<p className="max-w-2xl text-lg sm:text-xl text-gray-400 mt-8 text-center">
				Watch how our AI identifies and fixes issues in real-time
			</p>
			<div className="my-16 grid w-full max-w-400 grid-cols-1 gap-8 px-6 md:grid-cols-2">
				<div className='w-full max-w-5xl border border-white/10 rounded-xl bg-black/50 backdrop-blur-xl shadow-2xl shadow-cyan-500/15 overflow-hidden'>
					<div className='flex items-center gap-1.5 py-6 px-6 border-b border-gray-500/20 bg-gray-700/20 '>
						<Code className='h-5 w-5 text-cyan-400'/>
						<p className='ml-4 text-lg text-gray-200'>Code Input</p>
					</div>
					<div className='py-6 px-8 h-full'>
						<div className="flex ">
							<div className="text-gray-600 text-right pr-4 select-none">
								<div>1</div>
								<div>2</div>
								<div>3</div>
								<div>4</div>
							</div>
							<pre className="flex-1 overflow-x-auto text-gray-300">
								<code>{codeSnippet}</code>
							</pre>
						</div>
						<div className="relative mt-4 min-h-18 rounded overflow-hidden">
							<div className="absolute inset-0 rounded-xl bg-red-700" />
							<div className="absolute z-10 left-2 right-0 top-0 bottom-0 rounded-xl bg-red-950" />
							<div className="relative z-10 pl-8 py-4">
								<div className="flex items-start gap-3">
									<AlertCircle className="h-5 w-5 text-red-400 mt-0.5" />
									<div>
										<p className="text-sm font-semibold text-red-300">Line 2: SQL Injection Risk</p>
										<p className="text-xs text-red-400/80 mt-1">String concatenation in SQL query</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>



				<div className='w-full max-w-5xl border border-white/10 rounded-xl bg-black/50 backdrop-blur-xl shadow-2xl shadow-cyan-500/15 overflow-hidden'>
					<div className='flex items-center gap-1.5 py-6 px-6 border-b border-gray-500/20 bg-slate-800/30 '>
						<div className='bg-green-500 rounded-full h-3 w-3 animate-pulse'></div>
						<p className='ml-4 text-lg text-gray-200'>Code Input</p>
					</div>
					<div className='py-8 px-8 bg-slate-700/15 h-full'>
						<div className="relative min-h-20 rounded">
							<div className="absolute z-10 inset-0 rounded-xl bg-red-900/10 overflow-hidden border border-red-700/20" />
							<div className="relative z-10 px-8 py-4 ">
								<div className="flex items-start gap-3">
									<AlertCircle className="h-5 w-5 text-red-400 mt-0.5" />
									<div  className='w-full'>
										<div className='items-center flex justify-between'>
											<p className="font-semibold text-red-300">Performance Issue</p>
											<span className='text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-300'>high</span>
										</div>
										<p className="text-sm text-red-400/80 mt-1">SQL Injection vulnerability found on line 2</p>
									</div>
								</div>
							</div>
						</div>
						<div className="relative mt-4 min-h-20 rounded">
							<div className="absolute z-10 inset-0 rounded-xl bg-yellow-900/10 overflow-hidden border border-yellow-700/20" />
							<div className="relative z-10 px-8 py-4 ">
								<div className="flex items-start gap-3">
									<AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5" />
									<div className='w-full'>
										<div className='items-center flex justify-between'>
											<p className="font-semibold text-yellow-300">Security Issue Detected</p>
											<span className='text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300'>medium</span>
										</div>
										<p className="text-sm text-yellow-400/80 mt-1">Missing index on users table may cause slow queries</p>
									</div>
								</div>
							</div>
						</div>
						<div className="relative mt-4 min-h-20 rounded">
							<div className="absolute z-10 inset-0 rounded-xl bg-green-900/10 overflow-hidden border border-green-700/20" />
							<div className="relative z-10 px-8 py-4 ">
								<div className="flex items-start gap-3">
									<CheckCircle2 className="h-6 w-6 text-green-400 mt-0.5" />
									<div  className='w-full'>
										<div className='items-center flex justify-between'>
											<p className="font-semibold text-green-300">Suggested Fix</p>
											<span className='text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-300'>low</span>
										</div>
										<p className="text-sm text-green-400/80 mt-1">Use parameterized queries to prevent SQL injection</p>
									</div>
								</div>
							</div>
						</div>
						<div className="mt-6 rounded-lg border border-cyan-500/30 bg-cyan-500/5 p-4">
							<p className="text-sm font-semibold text-cyan-300 mb-2">💡 Recommended Fix:</p>
							<pre className="font-mono text-xs text-gray-300 bg-black/30 rounded p-3 overflow-x-auto">
								{`function getUserData(userId) {
	const query = "SELECT * FROM users WHERE id=?";
	return db.execute(query, [userId]);
}`}
							</pre>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
