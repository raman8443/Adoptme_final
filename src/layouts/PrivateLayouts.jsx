import { Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateLayout = () => {
  const { user } = useAuth();

  if (!user) return null; // o un loader

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Podés agregar un navbar privado acá */}
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
