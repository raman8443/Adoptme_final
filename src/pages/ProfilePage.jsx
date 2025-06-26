import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getCurrentUser } from "../api/userApi";

const ProfilePage = () => {
  const { token } = useAuth();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return;

    getCurrentUser(token)
      .then(setUser)
      .catch((err) => setError(err.message));
  }, [token]);

  if (error)
    return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  if (!user) return <p className="text-center mt-10">Cargando perfil...</p>;

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white shadow p-6 rounded">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
      />
      <h2 className="text-2xl text-center font-semibold mb-2">
        {user.name} {user.lastName}
      </h2>
      <p className="text-center text-gray-600">{user.email}</p>
      <div className="mt-4 text-sm text-gray-700 space-y-1">
        <p>
          <strong>Edad:</strong> {user.age}
        </p>
        <p>
          <strong>Género:</strong> {user.gender}
        </p>
        <p>
          <strong>Ubicación:</strong> {user.location}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
