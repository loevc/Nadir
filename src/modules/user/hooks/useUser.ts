import { useEffect } from "react";
import { useUserStore } from "../stores/userStore";

export function useUser() {
  const { users, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return { users };
}