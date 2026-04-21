"use client";

import { useMemo, useState } from "react";
import {
	Search,
	Filter,
	Eye,
	RotateCcw,
	Calendar,
	Code2,
	Github,
	AlertCircle,
	CheckCircle,
	Clock,
	TrendingUp,
	FileCode,
	Shield,
	ArrowUpDown,
	ArrowUp,
	ArrowDown,
} from "lucide-react";
import { CodeReviewStatusBadge } from "@/components/team/CodeReviewStatusBadge";

type Review = {
	id: string;
	projectName: string;
	type: "Manual" | "GitHub";
	issuesFound: number;
	criticalIssues: number;
	status: "Completed" | "Failed" | "In Progress";
	date: string;
	score: number;
};

type SortField = "projectName" | "issuesFound" | "score" | "date";
type SortDirection = "asc" | "desc";

const mockReviews: Review[] = [
	{
		id: "1",
		projectName: "auth-service.js",
		type: "Manual",
		issuesFound: 6,
		criticalIssues: 2,
		status: "Completed",
		date: "2026-03-01",
		score: 78,
	},
	{
		id: "2",
		projectName: "payment-gateway",
		type: "GitHub",
		issuesFound: 12,
		criticalIssues: 4,
		status: "Completed",
		date: "2026-02-28",
		score: 65,
	},
	{
		id: "3",
		projectName: "user-dashboard",
		type: "Manual",
		issuesFound: 3,
		criticalIssues: 0,
		status: "Completed",
		date: "2026-02-27",
		score: 92,
	},
	{
		id: "4",
		projectName: "api-middleware",
		type: "GitHub",
		issuesFound: 8,
		criticalIssues: 3,
		status: "Failed",
		date: "2026-02-26",
		score: 0,
	},
	{
		id: "5",
		projectName: "data-processor",
		type: "Manual",
		issuesFound: 0,
		criticalIssues: 0,
		status: "In Progress",
		date: "2026-03-01",
		score: 0,
	},
];

export default function ReviewHistoryPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [filterBy, setFilterBy] = useState("all");
	const [sortField, setSortField] = useState<SortField>("date");
	const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

	const handleSort = (field: SortField) => {
		if (sortField === field) {
			setSortDirection((previous) => (previous === "asc" ? "desc" : "asc"));
			return;
		}

		setSortField(field);
		setSortDirection("desc");
	};

	const getSortIcon = (field: SortField) => {
		if (sortField !== field) {
			return <ArrowUpDown className="size-4 ml-1 opacity-40" />;
		}

		return sortDirection === "asc" ? (
			<ArrowUp className="size-4 ml-1" />
		) : (
			<ArrowDown className="size-4 ml-1" />
		);
	};

	const filteredReviews = useMemo(() => {
		return [...mockReviews]
			.filter((review) => {
				const matchesSearch = review.projectName
					.toLowerCase()
					.includes(searchQuery.toLowerCase());

				if (filterBy === "all") return matchesSearch;
				if (filterBy === "manual") return matchesSearch && review.type === "Manual";
				if (filterBy === "github") return matchesSearch && review.type === "GitHub";
				if (filterBy === "completed") return matchesSearch && review.status === "Completed";
				if (filterBy === "failed") return matchesSearch && review.status === "Failed";
				if (filterBy === "critical") return matchesSearch && review.criticalIssues > 0;

				return matchesSearch;
			})
			.sort((a, b) => {
				let comparison = 0;

				switch (sortField) {
					case "projectName":
						comparison = a.projectName.localeCompare(b.projectName);
						break;
					case "issuesFound":
						comparison = a.issuesFound - b.issuesFound;
						break;
					case "score":
						comparison = a.score - b.score;
						break;
					case "date":
						comparison =
							new Date(a.date).getTime() - new Date(b.date).getTime();
						break;
				}

				return sortDirection === "asc" ? comparison : -comparison;
			});
	}, [searchQuery, filterBy, sortField, sortDirection]);

	const totalReviews = mockReviews.length;
	const issuesDetected = mockReviews.reduce(
		(total, review) => total + review.issuesFound,
		0,
	);
	const criticalIssues = mockReviews.reduce(
		(total, review) => total + review.criticalIssues,
		0,
	);
	const mostReviewed = "auth-service.js";

	const getTypeBadgeClasses = (type: Review["type"]) => {
		return type === "Manual"
			? "bg-purple-500/10 text-purple-400 border-purple-500/20"
			: "bg-blue-500/10 text-blue-400 border-blue-500/20";
	};

	const getScoreClasses = (score: number) => {
		if (score >= 80) return "bg-green-500/10 text-green-400 border-green-500/20";
		if (score >= 60) return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
		if (score > 0) return "bg-red-500/10 text-red-400 border-red-500/20";
		return "bg-gray-500/10 text-gray-400 border-gray-500/20";
	};

	return (
		<div className="flex flex-col gap-8">
			<div className="bg-gray-900 px-4 md:px-8 py-6 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30">
				<div className="space-y-3">
					<p className="text-xl md:text-3xl">Review History</p>
					<p className="text-gray-500 text-sm md:text-base">
						View and manage your past code reviews
					</p>
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
				<div className="bg-gray-900 px-6 py-5 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/20">
					<div className="flex items-center justify-between text-gray-500">
						<p className="text-sm">Total Reviews</p>
						<FileCode className="size-5" />
					</div>
					<div className="flex items-end gap-2 mt-3">
						<p className="text-3xl font-semibold">{totalReviews}</p>
						<TrendingUp className="size-4 text-green-400 mb-1" />
					</div>
				</div>

				<div className="bg-gray-900 px-6 py-5 rounded-xl border border-gray-500/50">
					<div className="flex items-center justify-between text-gray-500">
						<p className="text-sm">Issues Detected</p>
						<AlertCircle className="size-5 text-yellow-400" />
					</div>
					<p className="text-3xl font-semibold mt-3">{issuesDetected}</p>
				</div>

				<div className="bg-gray-900 px-6 py-5 rounded-xl border border-gray-500/50">
					<div className="flex items-center justify-between text-gray-500">
						<p className="text-sm">Critical Issues</p>
						<Shield className="size-5 text-red-400" />
					</div>
					<p className="text-3xl font-semibold mt-3">{criticalIssues}</p>
				</div>

				<div className="bg-gray-900 px-6 py-5 rounded-xl border border-gray-500/50">
					<div className="flex items-center justify-between text-gray-500">
						<p className="text-sm">Most Reviewed</p>
						<Code2 className="size-5 text-cyan-400" />
					</div>
					<p className="text-lg font-semibold mt-3 break-words">{mostReviewed}</p>
				</div>
			</div>

			<div className="bg-gray-900 px-4 md:px-6 py-5 rounded-xl border border-gray-500/50">
				<div className="flex flex-col md:flex-row gap-4">
					<div className="relative flex-1">
						<Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-gray-500" />
						<input
							value={searchQuery}
							onChange={(event) => setSearchQuery(event.target.value)}
							placeholder="Search by project name..."
							className="w-full h-12 pl-12 pr-4 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
						/>
					</div>

					<div className="relative md:w-64">
						<Filter className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-500 pointer-events-none" />
						<select
							value={filterBy}
							onChange={(event) => setFilterBy(event.target.value)}
							className="w-full h-12 pl-11 pr-4 bg-black/50 border border-cyan-500/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all"
						>
							<option value="all" className="bg-black text-white">
								All Reviews
							</option>
							<option value="manual" className="bg-black text-white">
								Manual Reviews
							</option>
							<option value="github" className="bg-black text-white">
								GitHub Reviews
							</option>
							<option value="completed" className="bg-black text-white">
								Completed
							</option>
							<option value="failed" className="bg-black text-white">
								Failed
							</option>
							<option value="critical" className="bg-black text-white">
								With Critical Issues
							</option>
						</select>
					</div>
				</div>
			</div>

			{filteredReviews.length === 0 ? (
				<div className="bg-gray-900 px-8 py-16 rounded-xl border border-gray-500/50 text-center">
					<div className="flex flex-col items-center">
						<div className="w-16 h-16 rounded-full bg-black/50 border border-gray-500/50 flex items-center justify-center mb-4">
							<FileCode className="size-8 text-gray-500" />
						</div>
						<p className="text-xl font-semibold">No Reviews Found</p>
						<p className="text-gray-500 mt-2">
							No reviews match your current search or filter.
						</p>
					</div>
				</div>
			) : (
				<>
					<div className="hidden lg:block bg-gray-900 rounded-xl border border-gray-500/50 overflow-hidden">
						<table className="w-full">
							<thead>
								<tr className="text-left bg-black/30">
									<th
										onClick={() => handleSort("projectName")}
										className="border-b border-gray-500/50 py-4 px-4 text-gray-500 cursor-pointer"
									>
										<div className="flex items-center">
											Project Name
											{getSortIcon("projectName")}
										</div>
									</th>
									<th className="border-b border-gray-500/50 py-4 px-4 text-gray-500">
										Type
									</th>
									<th
										onClick={() => handleSort("issuesFound")}
										className="border-b border-gray-500/50 py-4 px-4 text-gray-500 cursor-pointer"
									>
										<div className="flex items-center">
											Issues Found
											{getSortIcon("issuesFound")}
										</div>
									</th>
									<th
										onClick={() => handleSort("score")}
										className="border-b border-gray-500/50 py-4 px-4 text-gray-500 cursor-pointer"
									>
										<div className="flex items-center">
											Score
											{getSortIcon("score")}
										</div>
									</th>
									<th className="border-b border-gray-500/50 py-4 px-4 text-gray-500">
										Status
									</th>
									<th
										onClick={() => handleSort("date")}
										className="border-b border-gray-500/50 py-4 px-4 text-gray-500 cursor-pointer"
									>
										<div className="flex items-center">
											Date
											{getSortIcon("date")}
										</div>
									</th>
									<th className="border-b border-gray-500/50 py-4 px-4 text-gray-500 text-right">
										Actions
									</th>
								</tr>
							</thead>

							<tbody>
								{filteredReviews.map((review) => (
									<tr key={review.id} className="hover:bg-white/5 transition-colors">
										<td className="border-b border-gray-500/50 py-4 px-4">
											<div className="flex items-center gap-2">
												<FileCode className="size-4 text-cyan-400" />
												<p>{review.projectName}</p>
											</div>
										</td>

										<td className="border-b border-gray-500/50 py-4 px-4">
											<div
												className={`px-3 py-1 rounded-full text-xs border w-fit flex items-center gap-1 ${getTypeBadgeClasses(
													review.type,
												)}`}
											>
												{review.type === "GitHub" ? (
													<Github className="size-3" />
												) : (
													<Code2 className="size-3" />
												)}
												{review.type}
											</div>
										</td>

										<td className="border-b border-gray-500/50 py-4 px-4">
											<div className="flex flex-wrap gap-2">
												<div className="px-3 py-1 rounded-full text-xs border bg-gray-500/10 text-gray-300 border-gray-500/20 w-fit">
													{review.issuesFound} total
												</div>

												{review.criticalIssues > 0 && (
													<div className="px-3 py-1 rounded-full text-xs border bg-red-500/10 text-red-400 border-red-500/20 w-fit flex items-center gap-1">
														<AlertCircle className="size-3" />
														{review.criticalIssues} critical
													</div>
												)}
											</div>
										</td>

										<td className="border-b border-gray-500/50 py-4 px-4">
											{review.score > 0 ? (
												<div
													className={`px-3 py-1 rounded-full text-xs border w-fit ${getScoreClasses(
														review.score,
													)}`}
												>
													{review.score}/100
												</div>
											) : (
												<p className="text-gray-500">—</p>
											)}
										</td>

										<td className="border-b border-gray-500/50 py-4 px-4">
											<CodeReviewStatusBadge status={review.status} />
										</td>

										<td className="border-b border-gray-500/50 py-4 px-4 text-gray-500">
											<div className="flex items-center gap-2">
												<Calendar className="size-4" />
												{new Date(review.date).toLocaleDateString("en-US", {
													month: "short",
													day: "numeric",
													year: "numeric",
												})}
											</div>
										</td>

										<td className="border-b border-gray-500/50 py-4 px-4">
											<div className="flex justify-end gap-2">
												<button
													disabled={review.status === "In Progress"}
													className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-500/50 text-gray-300 hover:text-white hover:border-cyan-500/50 hover:bg-black/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
												>
													<Eye className="size-4" />
													View
												</button>

												<button
													disabled={review.status === "In Progress"}
													className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-500/50 text-gray-300 hover:text-white hover:border-cyan-500/50 hover:bg-black/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
												>
													<RotateCcw className="size-4" />
													Re-run
												</button>
											</div>
										</td>
									</tr>
								))}
							</tbody>
						</table>

						<div className="px-6 py-4 flex items-center justify-between border-t border-gray-500/50">
							<p className="text-sm text-gray-500">
								Showing {filteredReviews.length} of {mockReviews.length} reviews
							</p>
							<div className="flex gap-2">
								<button
									disabled
									className="px-4 py-2 rounded-lg border border-gray-500/50 text-gray-500 disabled:opacity-50"
								>
									Previous
								</button>
								<button
									disabled
									className="px-4 py-2 rounded-lg border border-gray-500/50 text-gray-500 disabled:opacity-50"
								>
									Next
								</button>
							</div>
						</div>
					</div>

					<div className="lg:hidden space-y-4">
						{filteredReviews.map((review) => (
							<div
								key={review.id}
								className="bg-gray-900 px-5 py-5 rounded-xl border border-gray-500/50"
							>
								<div className="flex justify-between gap-3 items-start">
									<div className="flex items-center gap-2 min-w-0">
										<FileCode className="size-5 text-cyan-400 shrink-0" />
										<p className="font-semibold truncate">{review.projectName}</p>
									</div>

									<div
										className={`px-3 py-1 rounded-full text-xs border w-fit flex items-center gap-1 shrink-0 ${getTypeBadgeClasses(
											review.type,
										)}`}
									>
										{review.type === "GitHub" ? (
											<Github className="size-3" />
										) : (
											<Code2 className="size-3" />
										)}
										{review.type}
									</div>
								</div>

								<div className="mt-4 space-y-3">
									<div className="flex flex-wrap gap-2">
										<div className="px-3 py-1 rounded-full text-xs border bg-gray-500/10 text-gray-300 border-gray-500/20 w-fit">
											{review.issuesFound} total
										</div>

										{review.criticalIssues > 0 && (
											<div className="px-3 py-1 rounded-full text-xs border bg-red-500/10 text-red-400 border-red-500/20 w-fit flex items-center gap-1">
												<AlertCircle className="size-3" />
												{review.criticalIssues} critical
											</div>
										)}
									</div>

									<div className="flex items-center justify-between gap-4">
										<div>
											<p className="text-sm text-gray-500">Score</p>
											{review.score > 0 ? (
												<div
													className={`mt-1 px-3 py-1 rounded-full text-xs border w-fit ${getScoreClasses(
														review.score,
													)}`}
												>
													{review.score}/100
												</div>
											) : (
												<p className="text-gray-500 mt-1">—</p>
											)}
										</div>

										<div>
											<p className="text-sm text-gray-500 mb-1">Status</p>
											<CodeReviewStatusBadge status={review.status} />
										</div>
									</div>

									<div className="flex items-center gap-2 text-sm text-gray-500">
										<Calendar className="size-4" />
										{new Date(review.date).toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
											year: "numeric",
										})}
									</div>
								</div>

								<div className="flex gap-2 pt-4 mt-4 border-t border-gray-500/50">
									<button
										disabled={review.status === "In Progress"}
										className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-500/50 text-gray-300 hover:text-white hover:border-cyan-500/50 hover:bg-black/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
									>
										<Eye className="size-4" />
										View
									</button>

									<button
										disabled={review.status === "In Progress"}
										className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-500/50 text-gray-300 hover:text-white hover:border-cyan-500/50 hover:bg-black/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
									>
										<RotateCcw className="size-4" />
										Re-run
									</button>
								</div>
							</div>
						))}

						<div className="bg-gray-900 px-5 py-4 rounded-xl border border-gray-500/50">
							<p className="text-sm text-gray-500 text-center mb-3">
								Showing {filteredReviews.length} of {mockReviews.length} reviews
							</p>
							<div className="flex gap-2">
								<button
									disabled
									className="flex-1 px-4 py-2 rounded-lg border border-gray-500/50 text-gray-500 disabled:opacity-50"
								>
									Previous
								</button>
								<button
									disabled
									className="flex-1 px-4 py-2 rounded-lg border border-gray-500/50 text-gray-500 disabled:opacity-50"
								>
									Next
								</button>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}


