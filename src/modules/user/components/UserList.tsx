import { useUser } from "../hooks/useUser";
import UserCard from "./UserCard";

export default function UserList() {
  const { users } = useUser();

  return (
    <div className="grid gap-4">
      {users.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  );
}