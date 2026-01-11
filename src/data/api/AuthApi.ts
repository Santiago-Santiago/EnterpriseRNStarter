export const authApi = {
    login: async (email: string, password: string) => {
        // Simulate an API call
        return new Promise<{ id: string; name: string; email: string }>((resolve) => {
            setTimeout(() => {
                resolve({ id: "user-001", name: "Santiago Santiago", email });
            }, 1000);
        });
    }
}