export default function Docs(){
	return (
		<div id="docs" className="mx-auto max-w-7xl px-6 pt-32 pb-16 flex gap-12">
			<aside className="w-64 hidden lg:block sticky top-32 h-fit">
				<nav className="space-y-6 text-sm">
					<div>
						<p className="text-gray-500 uppercase text-xs mb-3">
							Getting Started
						</p>
						<a href="#docs-intro" className="block text-gray-400 hover:text-white">
							Introduction
						</a>
						<a href="#docs-quickstart" className="block text-gray-400 hover:text-white">
							Quick Start
						</a>
					</div>

					<div>
						<p className="text-gray-500 uppercase text-xs mb-3">
							Core Features
						</p>
						<a href="#docs-manual-review" className="block text-gray-400 hover:text-white">
							Manual Review
						</a>
						<a href="#docs-github" className="block text-gray-400 hover:text-white">
							GitHub Integration
						</a>
					</div>

					<div>
						<p className="text-gray-500 uppercase text-xs mb-3">
							 Advanced
						</p>
						<a href="#docs-api" className="block text-gray-400 hover:text-white">
							API
						</a>
					</div>
				</nav>
			</aside>
			<div>
				<div>
					<p className="text-4xl font-bold text-gray-200">CAP Documentation</p>
					<p className="text-lg font-bold text-gray-500 pt-4 pb-12">Learn how to integrate CAP AI code reviewer into your development workflow.</p>
				</div>
				<div id="docs-intro" className="scroll-mt-32">
					<p className="text-2xl font-bold text-gray-200">Introduction</p>
					<p className="text-lg font-bold text-gray-500 pt-4 pb-12">CAP analyzes code repositories and detects bugs, performance issues and security vulnerabilities using AI-powered code analysis.</p>
				</div>
				<div id="docs-quickstart" className="scroll-mt-32">
					<p className="text-2xl font-bold text-gray-200">Quick Start</p>
					<ol className="list-decimal list-inside text-lg font-bold text-gray-500 pt-4 pb-12">
						<li>Create a CAP account</li>
						<li>Upload your code or connect GitHub</li>
						<li>Run your first AI review</li>
						<li>Analyze the results</li>
					</ol>
				</div>
				<div id="docs-manual-review" className="scroll-mt-32">
					<p className="text-2xl font-bold text-gray-200">Manual Review</p>
					<p className="text-lg font-bold text-gray-500 pt-4">CAP allows you to upload a repository or paste code snippets for instant AI review and improvement suggestions.</p>
					<pre className="bg-black border border-white/10 rounded-xl p-4 overflow-x-auto mt-4 mb-12">
						<code>
{`cap review ./project-folder`}
						</code>
					</pre>
				</div>
				<div id="docs-github" className="scroll-mt-32">
					<p className="text-2xl font-bold text-gray-200">GitHub Integration</p>
					<p className="text-lg font-bold text-gray-500 pt-4">Connect your GitHub repository to enable automatic AI reviews on pull requests and commits.</p>
					<pre className="bg-black border border-white/10 rounded-xl p-4 overflow-x-auto mt-4 mb-12">
						<code>
{`https://cap.dev/connect/github`}
						</code>
					</pre>
				</div>
				<div id="docs-api" className="scroll-mt-32">
					<p className="text-2xl font-bold text-gray-200">API</p>
					<p className="text-lg font-bold text-gray-500 pt-4">Use the CAP API to integrate automated code review into your CI pipeline.</p>
					<pre className="bg-black border border-white/10 rounded-xl p-4 overflow-x-auto mt-4 mb-12">
						<code>
{`POST /api/review

{
  "repo": "github.com/user/project",
  "language": "typescript"
}`}
						</code>
					</pre>
				</div>
			</div>
		</div>
	)
}
