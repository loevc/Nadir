import type { User } from "../types/user";

interface Props {
  user: User;
}

export default function UserCard({user}: Props) {
  return (
    <div className="user-card">
        {/* // p-4 border rounded-xl */}
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Type: {user.type}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}
