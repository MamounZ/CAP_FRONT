import { TeamSetupData } from "@/types/TeamSetupData"

type IntegrationAndSettingsProps = {
	data: TeamSetupData
	setData: (data: TeamSetupData) => void
	back: () => void
}

export default function IntegrationAndSettings({ data, setData, back }: IntegrationAndSettingsProps) {
	const update = (field: string, value: string | boolean) => {
		setData({ ...data, [field]: value });
	};

	console.log(data)

	return (
		<div className="max-w-4xl mx-auto">

			<p className="text-4xl font-bold">Integration & Settings</p>
			<p className="text-gray-500 mt-2">Configure how CAP integrates with your workflow</p>

			<div className="my-8">
				<p className="text-xl font-bold mb-4">GitHub Integration</p>

				<input
				placeholder="Repository URL"
				className="w-full border border-gray-500/50 mb-4 p-4 rounded-xl"
				value={data.repo}
				onChange={(e) => update("repo", e.target.value)}
				/>

				<select
				className="w-full border border-gray-500/50 mb-4 p-4 rounded-xl"
				value={data.branch}
				onChange={(e) => update("branch", e.target.value)}
				>
					<option value="main" className="bg-black/80 text-white">main</option>
					<option value="dev" className="bg-black/80 text-white">dev</option>
				</select>

				<div className="flex flex-col sm:flex-row gap-6 mt-4">
					<label className="flex items-center gap-2">
						<input
						type="checkbox"
						checked={data.prReview}
						onChange={(e) => update("prReview", e.target.checked)}
						/>
						Enable PR auto-review
					</label>

					<label className="flex items-center gap-2">
						<input
						type="checkbox"
						checked={data.commitReview}
						onChange={(e) => update("commitReview", e.target.checked)}
						/>
						Enable commit review
					</label>
				</div>
			</div>

			<div className="my-8">
				<p className="text-xl font-bold mb-4">Automation</p>

				<select
				className="w-full border border-gray-500/50 mb-4 p-4 rounded-xl"
				value={data.trigger}
				onChange={(e) => update("trigger", e.target.value)}
				>
					<option value="on-push" className="bg-black/80 text-white">On push</option>
					<option value="pull-request" className="bg-black/80 text-white">On pull request</option>
					<option value="scheduled" className="bg-black/80 text-white">Scheduled</option>
				</select>

				{data.trigger === "scheduled" && (
					<select
					className="w-full border border-gray-500/50 mb-4 p-4 rounded-xl"
					value={data.schedule}
					onChange={(e) => update("schedule", e.target.value)}
					>
						<option value="daily" className="bg-black/80 text-white">Daily</option>
						<option value="weekly" className="bg-black/80 text-white">Weekly</option>
						<option value="custom-cron" className="bg-black/80 text-white">Custom cron</option>
					</select>
				)}
			</div>


			<div className="my-8">
				<p className="text-xl font-bold mb-4">AI Settings</p>

				<select
				className="w-full border border-gray-500/50 mb-4 p-4 rounded-xl"
				value={data.mode}
				onChange={(e) => update("mode", e.target.value)}
				>
					<option value="auto" className="bg-black/80 text-white">Auto (Full AI)</option>
					<option value="custom" className="bg-black/80 text-white">Custom (Selected Rules)</option>
				</select>

				<label className="flex items-center gap-2 mb-4">
					<input
					type="checkbox"
					checked={data.autoFix}
					onChange={(e) => update("autoFix", e.target.checked)}
					/>
					Enable Auto-Fix
				</label>

				<select
				className="w-full border border-gray-500/50 mb-4 p-4 rounded-xl"
				value={data.level}
				onChange={(e) => update("level", e.target.value)}
				>
					<option value="strict" className="bg-black/80 text-white">Strict</option>
					<option value="balanced" className="bg-black/80 text-white">Balanced</option>
					<option value="relaxed" className="bg-black/80 text-white">Relaxed</option>
				</select>
			</div>

			<div className="my-8">
				<p className="text-xl font-bold mb-4">Notifications</p>

				<label className="flex items-center gap-2 mb-2">
					<input
					type="checkbox"
					checked={data.emailNotification}
					onChange={(e) => update("emailNotification", e.target.checked)}
					/>
					Email notifications
				</label>

				<label className="flex items-center gap-2 mb-2">
					<input
					type="checkbox"
					checked={data.appNotification}
					onChange={(e) => update("appNotification", e.target.checked)}
					/>
					In-app notifications
				</label>

				<input
				placeholder="Slack / Discord Webhook URL"
				className="w-full border border-gray-500/50 mb-4 p-4 rounded-xl"
				value={data.webhook}
				onChange={(e) => update("webhook", e.target.value)}
				/>
			</div>

			<div className="mb-10">
				<p className="text-xl font-bold mb-4">Security & Permissions</p>

				<div className="mb-4">
					<p className="text-md font-semibold">Who can edit rules</p>
					<p className="text-sm text-gray-400 mb-2">Controls which roles can modify AI review rules and settings</p>

					<select
					className="w-full border border-gray-500/50 mb-4 p-4 rounded-xl"
					value={data.editRules}
					onChange={(e) => update("editRules", e.target.value)}
					>
						<option className="bg-black/80 text-white">Owner only</option>
						<option className="bg-black/80 text-white">Admins</option>
						<option className="bg-black/80 text-white">All members</option>
					</select>
				</div>

				<div className="mb-4">
					<p className="text-md font-bold">Who can approve changes</p>
					<p className="text-sm text-gray-400 mb-2">Controls who can approve reviews, fixes, and pull requests</p>

					<select
					className="w-full border border-gray-500/50 mb-4 p-4 rounded-xl"
					value={data.approve}
					onChange={(e) => update("approve", e.target.value)}
					>
						<option className="bg-black/80 text-white">Owner</option>
						<option className="bg-black/80 text-white">Admins</option>
					</select>
				</div>

				<div className="bg-white/5 border border-white/10 rounded-xl p-4 mt-4">
					<p className="text-sm text-gray-400 mb-4">Repo Access (from team members)</p>

					{data.members?.map((members, index) => (
						<div
							key={index}
							className="flex justify-between items-center text-sm mb-2"
						>
							<span>
								{members.name || members.github || members.email || "Unnamed"}{" "}
								<span className="text-gray-500">
									({members.role})
								</span>
							</span>

							<select
							className="bg-black border border-white/10 rounded px-2 py-1"
							onChange={(e) => update(`members: ...members, ${index}: ...${index}, access`, e.target.value)
								}
							>
								<option className="bg-black/80 text-white">Read</option>
								<option className="bg-black/80 text-white">Write</option>
								<option className="bg-black/80 text-white">Admin</option>
							</select>
						</div>
					))}
				</div>
			</div>

			<div className="my-8">
				<p className="text-sm text-gray-400 mb-4">Deadlines</p>

				<input
				type="date"
				className="bg-white/5 border border-white/10 rounded-xl p-4 mt-4"
				value={data.deadline}
				onChange={(e) => update("deadline", e.target.value)}
				/>
			</div>

			<button className="block justify-self-center btn-primary p-3 rounded-lg text-black font-bold bg-linear-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50">
				🚀 Create Team Workspace
			</button>

			<button
				onClick={back}
				className="mt-8 text-gray-400 hover:text-white"
			>
				Back
			</button>

		</div>
	);
}
