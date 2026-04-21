"use client";

import { Send, MoreVertical } from "lucide-react";
import { useEffect, useState } from "react";

type Message = {
	id: string;
	sender: string;
	avatar: string;
	content: string;
	timestamp: string;
	isCurrentUser?: boolean;
};

type ChatInterfaceProps = {
	projectName: string;
	messages: Message[];
};

export default function ChatInterface({
	projectName,
	messages: initialMessages,
}: ChatInterfaceProps) {
	const [messages, setMessages] = useState<Message[]>(initialMessages);
	const [newMessage, setNewMessage] = useState("");

	useEffect(() => {
		setMessages(initialMessages);
	}, [initialMessages]);

	const handleSendMessage = () => {
		if (!newMessage.trim()) return;

		const message: Message = {
			id: Date.now().toString(),
			sender: "You",
			avatar: "YU",
			content: newMessage.trim(),
			timestamp: "Just now",
			isCurrentUser: true,
		};

		setMessages((prev) => [...prev, message]);
		setNewMessage("");
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter" && !event.shiftKey) {
			event.preventDefault();
			handleSendMessage();
		}
	};

	return (
		<div className="flex flex-col h-full min-h-0 bg-gray-900 border border-cyan-500/50 rounded-xl overflow-hidden">
			{/* Header */}
			<div className="px-4 md:px-6 py-4 border-b border-gray-500/50 flex items-center justify-between">
				<div className="min-w-0">
					<p className="text-white text-base md:text-lg truncate">
						{projectName}
					</p>
					<p className="text-gray-500 text-xs md:text-sm">Team Chat</p>
				</div>

				<button className="p-2 hover:bg-black/30 rounded-xl transition-colors shrink-0">
					<MoreVertical className="text-gray-400" size={18} />
				</button>
			</div>

			{/* Messages */}
			<div className="flex-1 min-h-0 overflow-y-auto px-4 md:px-6 py-4 space-y-4">
				{messages.map((message) => (
					<div
						key={message.id}
						className={`flex gap-2 md:gap-3 ${
							message.isCurrentUser ? "flex-row-reverse" : ""
						}`}
					>
						{/* Avatar */}
						<div
							className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs text-white flex-shrink-0 ${
								message.isCurrentUser
									? "bg-cyan-500/20 border border-cyan-500/30"
									: "bg-gray-700 border border-gray-500/30"
							}`}
						>
							{message.avatar}
						</div>

						{/* Message */}
						<div
							className={`flex flex-col ${
								message.isCurrentUser ? "items-end" : "items-start"
							} max-w-[85%] sm:max-w-[75%] md:max-w-[65%]`}
						>
							<div className="flex items-center gap-2 mb-1 flex-wrap">
								<span className="text-gray-300 text-xs md:text-sm">
									{message.sender}
								</span>
								<span className="text-gray-500 text-[10px] md:text-xs">
									{message.timestamp}
								</span>
							</div>

							<div
								className={`px-3 md:px-4 py-2 md:py-3 rounded-xl border text-xs md:text-sm break-words ${
									message.isCurrentUser
										? "bg-cyan-500/10 border-cyan-500/30 text-white"
										: "bg-black/40 border-gray-500/30 text-white"
								}`}
							>
								{message.content}
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Input */}
			<div className="px-4 md:px-6 py-4 border-t border-gray-500/50">
				<div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
					<input
						type="text"
						value={newMessage}
						onChange={(e) => setNewMessage(e.target.value)}
						onKeyDown={handleKeyDown}
						placeholder="Type a message..."
						className="flex-1 bg-black/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
					/>

					<button
						onClick={handleSendMessage}
						className="flex items-center justify-center gap-2 px-4 py-3 sm:px-5 bg-linear-to-r from-cyan-500 to-teal-500 text-black rounded-xl hover:from-cyan-400 hover:to-teal-400 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
					>
						<Send size={16} />
						<span className="sm:hidden">Send</span>
					</button>
				</div>
			</div>
		</div>
	);
}
