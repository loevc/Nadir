import { useEffect } from "react";
import { useUserStore } from "@/modules/user/stores/userStore";

export default function UserPage() {
  const users = useUserStore((s) => s.users);
  const fetchUsers = useUserStore((s) => s.fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
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

      <div className="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
        <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://tailwindcss.com/_next/static/media/erin-lindford.90b9d461.jpg" alt="" />
        <div className="space-y-2 text-center sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">Erin Lindford</p>
            <p className="font-medium text-gray-500">Product Engineer</p>
          </div>
          <button className="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
            Message
          </button>
        </div>
      </div>
    </>
  );
}
