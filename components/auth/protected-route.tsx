"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";

export default function ProtectedRoute({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();
	const { isAuthenticated, isLoading } = useAuthStore();

	useEffect(() => {
		if (!isLoading && !isAuthenticated) {
			router.replace("/auth/login");
		}
	}, [isAuthenticated, isLoading, router]);

	if (isLoading) {
		return (
			<div className="p-8 text-white">
				Loading...
			</div>
		);
	}

	if (!isAuthenticated) {
		return null;
	}

	return (
		<>
			{children}
		</>
	);
}


