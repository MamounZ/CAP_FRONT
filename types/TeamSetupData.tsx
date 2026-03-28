export type TeamSetupData = {
	teamName: string;
	projectName: string;
	description: string;

	members: {
		name: string;
		github: string;
		email: string;
		role: "Owner" | "Admin" | "Developer" | "Viewer";
		type: "manual" | "github";
	}[];

	rules: string[];
	customRules: string[];

	repo: string;
	branch: string;
	mode: "auto" | "custom";

	prReview: boolean;
	commitReview: boolean;
	trigger: "on-push" | "scheduled";
	schedule: string;
	autoFix: boolean;
	level: "strict" | "balanced" | "relaxed";

	emailNotification: boolean;
	appNotification: boolean;
	webhook: string;

	editRules: "Owner only" | "Admins" | "All members";
	approve: "Owner" | "Admin";

	deadline: string;
};
