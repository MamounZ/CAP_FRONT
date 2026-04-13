import ColoredButton from "@/components/ColoredButton";
import { useState } from "react";
import Switch from "react-switch";

export default function Notification(){
	const [notificationSettings, setNotificationSettings] = useState({
		reviewComplete: false,
		criticalIssues: false,
		prReviewComments: false,
		securityAlerts: false,
		weeklyDigest: false,
		teamActivity: false,
	});

	const handleToggleSetting = (
		setting: keyof typeof notificationSettings,
		value: boolean,
	) => {
		setNotificationSettings((previousSettings) => ({
			...previousSettings,
			[setting]: value,
		}));
	};

	return(
		<div className="space-y-4 pb-8">
			<div className="bg-gray-900 rounded-lg px-4 py-6 sm:px-6 space-y-8">
				<div>
					<p className="text-xl sm:text-2xl">Notification Preferences</p>
					<p className="text-sm sm:text-md text-gray-500">Choose which notifications you want to receive</p>
				</div>
				<div className="flex justify-between items-center bg-black/50 rounded-lg px-4 py-6">
					<div>
						<p className="text-xl sm:text-2xl">Review Complete</p>
						<p className="text-sm sm:text-md text-gray-500">Get notified when a code review finishes</p>
					</div>
					<Switch
						checked={notificationSettings.reviewComplete}
						onChange={(checked) => handleToggleSetting("reviewComplete", checked)}
						onColor="00BCD4"
						uncheckedIcon={false}
						checkedIcon={false}
					/>
				</div>
				<div className="flex justify-between items-center bg-black/50 rounded-lg px-4 py-6">
					<div>
						<p className="text-xl sm:text-2xl">Critical Issues</p>
						<p className="text-sm sm:text-md text-gray-500">Alert me when critical issues are detected</p>
					</div>
					<Switch
						checked={notificationSettings.criticalIssues}
						onChange={(checked) => handleToggleSetting("criticalIssues", checked)}
						onColor="00BCD4"
						uncheckedIcon={false}
						checkedIcon={false}
					/>
				</div><div className="flex justify-between items-center bg-black/50 rounded-lg px-4 py-6">
					<div>
						<p className="text-xl sm:text-2xl">PR Review Comments</p>
						<p className="text-sm sm:text-md text-gray-500">Notify me of comments on pull requests</p>
					</div>
					<Switch
						checked={notificationSettings.prReviewComments}
						onChange={(checked) => handleToggleSetting("prReviewComments", checked)}
						onColor="00BCD4"
						uncheckedIcon={false}
						checkedIcon={false}
					/>
				</div><div className="flex justify-between items-center bg-black/50 rounded-lg px-4 py-6">
					<div>
						<p className="text-xl sm:text-2xl">Security Alerts</p>
						<p className="text-sm sm:text-md text-gray-500">Important security vulnerability notifications</p>
					</div>
					<Switch
						checked={notificationSettings.securityAlerts}
						onChange={(checked) => handleToggleSetting("securityAlerts", checked)}
						onColor="00BCD4"
						uncheckedIcon={false}
						checkedIcon={false}
					/>
				</div><div className="flex justify-between items-center bg-black/50 rounded-lg px-4 py-6">
					<div>
						<p className="text-xl sm:text-2xl">Weekly Digest</p>
						<p className="text-sm sm:text-md text-gray-500">Summary of your weekly activity</p>
					</div>
					<Switch
						checked={notificationSettings.weeklyDigest}
						onChange={(checked) => handleToggleSetting("weeklyDigest", checked)}
						onColor="00BCD4"
						uncheckedIcon={false}
						checkedIcon={false}
					/>
				</div>
				<div className="flex justify-between items-center bg-black/50 rounded-lg px-4 py-6">
					<div>
						<p className="text-xl sm:text-2xl">Team Activity</p>
						<p className="text-sm sm:text-md text-gray-500">Updates from your team members</p>
					</div>
					<Switch
						checked={notificationSettings.teamActivity}
						onChange={(checked) => handleToggleSetting("teamActivity", checked)}
						onColor="00BCD4"
						uncheckedIcon={false}
						checkedIcon={false}
					/>
				</div>
			</div>
			<div className="justify-self-end">
				<ColoredButton onClick={() => console.log("to be replaced with api call")}>Save Preferences</ColoredButton>
			</div>
		</div>
	)
}
