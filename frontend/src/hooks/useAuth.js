import { create } from 'zustand';

export const useAuth = create((set) => ({
	user: null,
	accessToken: null,
	updateAccessToken: (accessToken) => set({ accessToken }),
	updateUser: (user) => set({ user }),
}));
