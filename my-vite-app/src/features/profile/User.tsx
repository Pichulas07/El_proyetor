import { useEffect, useState } from "react";
import type { User } from "../../models/User.Model";
import { getUser } from "../../services/User.Service";
import UserCard from "./UserCard";

export default function UserProfile() {
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUser()
      .then(setUserData)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="animate-pulse p-4">Cargando perfil...</div>;
  
  if (!userData) return null;

  return (
    <div className="flex justify-center p-6">
      <UserCard user={userData} />
    </div>
  );
}
