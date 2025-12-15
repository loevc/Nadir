import {create} from 'zustand';
import type {User} from '../types/user';
import { getUserList } from '../api/userApi';


interface UserState {
  users: User[];
  fetchUsers: () => Promise<void>;
}

export const useUserStore = create<UserState>((set) => ({
  users: [],
  fetchUsers: async () => {
    try {
      const list = await getUserList();
      set({users : list});
    } catch (error) {
      console.error("Failed to fetch users:", error);
    }
 }
}));