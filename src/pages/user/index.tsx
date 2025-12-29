import { useEffect } from "react";
import { useUserStore } from "@/modules/user/stores/userStore";

export default function UserPage() {
  const users = useUserStore((s) => s.users);
  const fetchUsers = useUserStore((s) => s.fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>User List</h1>

 {/* this part is commented out to avoid rendering issues while fetching users */}

      {users.length > 0 ? (
        users.map((u) => (
          <div key={u.id} style={{ marginBottom: 10 }}>
            <p>Name: {u.name}</p>
          </div>
        ))
      ) : (
        <p>Loading users...</p>
      )}

      

    </div>
  );
}
