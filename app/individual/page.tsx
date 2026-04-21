"use client";

import { FileText, TrendingUp, AlertCircle, AlertTriangle, Github, Users } from "lucide-react";
import ColoredButton from "@/components/ColoredButton";
import IndividualRecentReviews from "@/components/individual/IndividualRecentReviews";
import GitHubOnboarding from "@/components/individual/GitHubOnboarding";

export default function IndividualDashboard() {

	// if (github-is-not-connected)
		// return(<GitHubOnboarding />)

	return (
		<div className="flex flex-col gap-8">
			{/* Convert to Team Dashboard CTA */}
			<div className="bg-linear-to-r from-purple-600/20 to-blue-600/20 border-2 border-purple-500/30 rounded-2xl p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
				<div className="flex items-start gap-4">
					<div className="size-12 rounded-full bg-purple-500/20 border-2 border-purple-500/30 flex items-center justify-center shrink-0">
						<Users className="size-6 text-purple-400" />
					</div>

					<div>
						<p className="text-lg font-bold text-white mb-1">
							Collaborate with Your Team
						</p>
						<p className="text-sm text-neutral-300">
							Convert to a team dashboard to enable collaboration and team management features
						</p>
					</div>
				</div>

				<button
					onClick={() => console.log("convert to team dashboard")}
					className="gap-2 bg-linear-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white font-semibold shadow-lg shadow-purple-500/30 rounded-xl px-6 py-3 flex items-center"
				>
					<Users className="size-4" />
					Convert to Team Dashboard
				</button>
			</div>

			{/* Start Review CTA */}
			<div className="bg-gray-900 px-4 md:px-8 py-8 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30">
				<div className="flex flex-col items-center gap-4 text-center">
					<p className="text-xl md:text-3xl">Ready to Review Your Code?</p>
					<p className="text-gray-500 max-w-2xl">
						Start a new review to get instant AI-powered analysis with detailed suggestions and fixes.
					</p>
					<ColoredButton onClick={() => console.log("start review")}>
						<div className="flex items-center gap-4">
							<FileText />
							Start Review
						</div>
					</ColoredButton>
				</div>
			</div>

			{/* Overview */}
			<div>
				<p className="text-xl">Overview</p>
				<div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4 mt-2">
					<div className="bg-gray-900 px-8 py-4 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30 min-w-0">
						<div className="flex justify-between w-full text-gray-500 text-sm">
							<p>Reviews This Month</p>
							<FileText className="text-cyan-400" />
						</div>
						<div className="flex items-baseline">
							<p className="pt-2 pb-2 pr-2 text-4xl">24</p>
							<p className="text-green-500 text-sm">+12%</p>
						</div>
						<p className="text-gray-500 text-sm">From last month</p>
					</div>

					<div className="bg-gray-900 px-8 py-4 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30 min-w-0">
						<div className="flex justify-between w-full text-gray-500 text-sm">
							<p>Issues Detected</p>
							<AlertCircle className="text-orange-400" />
						</div>
						<div className="flex items-baseline">
							<p className="pt-2 pb-2 pr-2 text-4xl">89</p>
							<p className="text-green-500 text-sm">-8%</p>
						</div>
						<p className="text-gray-500 text-sm">From last month</p>
					</div>

					<div className="bg-gray-900 px-8 py-4 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30 min-w-0">
						<div className="flex justify-between w-full text-gray-500 text-sm">
							<p>Critical Issues</p>
							<AlertTriangle className="text-red-400" />
						</div>
						<div className="flex items-baseline">
							<p className="pt-2 pb-2 pr-2 text-4xl">7</p>
							<p className="text-red-500 text-sm">+2</p>
						</div>
						<p className="text-gray-500 text-sm">From last month</p>
					</div>

					<div className="bg-gray-900 px-8 py-4 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30 min-w-0">
						<div className="flex justify-between w-full text-gray-500 text-sm">
							<p>Active Repositories</p>
							<Github className="text-blue-400" />
						</div>
						<div className="flex items-baseline">
							<p className="pt-2 pb-2 pr-2 text-4xl">12</p>
						</div>
						<p className="text-gray-500 text-sm">Connected repositories</p>
					</div>
				</div>
			</div>

			{/* Recent Reviews */}
			<div>
				<div className="flex justify-between">
					<p className="text-lg md:text-xl">Recent Reviews</p>
					<button
						onClick={() => console.log("view all reviews")}
						className="text-sm text-cyan-500 hover:text-cyan-300"
					>
						View All
					</button>
				</div>

				<div className="bg-gray-900 px-8 py-4 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30 mt-2">
					<IndividualRecentReviews />
				</div>
			</div>
		</div>
	);
}
