const AUTH_TOKEN_KEY = "aphmed_auth_token";

export const getAuthToken = (): string | null => {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(AUTH_TOKEN_KEY);
};

export const setAuthToken = (token: string): void => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(AUTH_TOKEN_KEY, token);
};

export const removeAuthToken = (): void => {
    if (typeof window === "undefined") return;
    window.localStorage.removeItem(AUTH_TOKEN_KEY);
};

export const getAuthHeaders = (extraHeaders: Record<string, string> = {}): Record<string, string> => {
    const token = getAuthToken();
    return token ? { ...extraHeaders, Authorization: `Bearer ${token}` } : { ...extraHeaders };
};
