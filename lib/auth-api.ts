import type {
	ApiResponse,
	AuthResponseData,
	LoginPayload,
	MeUser,
	RegisterPayload,
} from "@/types/auth";

const AUTH_BASE_URL =
	process.env.NEXT_PUBLIC_AUTH_API_URL;

async function request<T>(
	path: string,
	options?: RequestInit
): Promise<ApiResponse<T>> {
	const response = await fetch(`${AUTH_BASE_URL}${path}`, {
		...options,
		credentials: "include",
		headers: {
			"Content-Type": "application/json",
			...(options?.headers ?? {}),
		},
	});

	const data = (await response.json()) as ApiResponse<T>;

	return data;
}

export async function register(payload: RegisterPayload) {
	return request<AuthResponseData>("/auth/register", {
		method: "POST",
		body: JSON.stringify(payload),
	});
}

export async function login(payload: LoginPayload) {
	return request<AuthResponseData>("/auth/login", {
		method: "POST",
		body: JSON.stringify(payload),
	});
}

export async function getMe() {
	return request<MeUser>("/auth/me", {
		method: "GET",
	});
}

export async function logout() {
	return request<{ message: string }>("/auth/logout", {
		method: "POST",
	});
}

export function githubLogin() {
	window.location.href = `${AUTH_BASE_URL}/auth/github`;
}
