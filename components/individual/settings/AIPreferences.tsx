import ColoredButton from "@/components/ColoredButton";
import { useState } from "react";
import Switch from "react-switch";

export default function AIPreferences(){
	const [isEnabled, setIsEnabled] = useState(false);

	return(
		<div className="space-y-4">
			<div className="bg-gray-900 rounded-lg px-4 py-6 sm:px-6 space-y-2">
				<div className="flex justify-between items-center">
					<div>
						<p className="text-xl sm:text-2xl">Inline Suggestions</p>
						<p className="text-sm sm:text-md text-gray-500">Show AI suggestions directly in your code editor</p>
					</div>
					<Switch checked={isEnabled} onChange={setIsEnabled} onColor="00BCD4" uncheckedIcon={false} checkedIcon={false}/>
				</div>
			</div>
			<div className="justify-self-end">
				<ColoredButton onClick={() => console.log("to be replaced with api call")}>Save Preferences</ColoredButton>
			</div>
		</div>
	)
}
