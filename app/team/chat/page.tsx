"use client";

import { useState } from "react";
import { MessageSquare, Clock, Users } from "lucide-react";
import { mockProjectChats } from "@/app/data/mockData";
import ChatInterface from "@/components/team/ChatInterface";

export default function TeamChat() {
	const [selectedChat, setSelectedChat] = useState<string | null>(null);
	const chats = mockProjectChats;

	const selectedChatData = chats.find((chat) => chat.id === selectedChat);

	return (
		<div className="flex flex-col gap-8 h-full">
			{/* Header */}
			<div className="bg-gray-900 px-6 py-6 rounded-xl border border-cyan-500/50 shadow-lg shadow-cyan-500/30">
				<p className="text-xl md:text-3xl">Team Chats</p>
				<p className="text-gray-500 text-sm mt-2">
					Communicate with your team on different projects
				</p>
			</div>

			<div className="flex flex-col sm:flex-row gap-6 flex-1 overflow-hidden">
				{/* Chat List */}
				<div className="w-auto sm:w-80 bg-gray-900 border border-cyan-500/50 rounded-xl overflow-hidden flex flex-col shadow-lg shadow-cyan-500/20">
					<div className="p-5 border-b border-gray-500/50">
						<p className="text-white">All Conversations</p>
						<p className="text-gray-500 text-sm mt-1">
							{chats.length} active chats
						</p>
					</div>

					<div className="flex-1 overflow-y-auto">
						{chats.map((chat) => (
							<button
								key={chat.id}
								onClick={() => setSelectedChat(chat.id)}
								className={`w-full p-5 border-b border-gray-500/50 hover:bg-white/5 text-left ${
									selectedChat === chat.id ? "bg-white/5" : ""
								}`}
							>
								<div className="flex justify-between mb-2">
									<div className="flex items-center gap-3">
										<MessageSquare className="text-cyan-400" size={16} />
										<p>{chat.projectName}</p>
									</div>

									{chat.unreadCount > 0 && (
										<span className="bg-cyan-500 text-black text-xs px-2 py-1 rounded-full">
											{chat.unreadCount}
										</span>
									)}
								</div>

								<p className="text-gray-500 text-sm ml-6 truncate">
									{chat.lastMessage}
								</p>

								<div className="flex gap-4 ml-6 text-xs text-gray-500 mt-1">
									<span className="flex items-center gap-1">
										<Clock size={12} />
										{chat.lastMessageTime}
									</span>
									<span className="flex items-center gap-1">
										<Users size={12} />
										{chat.participants}
									</span>
								</div>
							</button>
						))}
					</div>
				</div>

				{/* Chat Interface */}
				<div className="flex-1">
					{selectedChatData ? (
						<div className="bg-gray-900 border border-cyan-500/50 rounded-xl h-full shadow-lg shadow-cyan-500/20">
							<ChatInterface
								projectName={selectedChatData.projectName}
								messages={selectedChatData.messages}
							/>
						</div>
					) : (
						<div className="h-full bg-gray-900 border border-cyan-500/50 rounded-xl flex items-center justify-center">
							<p className="text-gray-500">
								Select a chat to start messaging
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
