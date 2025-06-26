import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../api/authApi";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { token, user } = await loginUser({ email, password });

      // Guardar usuario y token en contexto + localStorage
      login(user, token);

      navigate("/"); // o redirigir a "/perfil" por ejemplo
    } catch (err) {
      alert("Error al iniciar sesión: " + err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 p-6 bg-[#B5BF63] shadow-lg rounded"
      >
        <div className="flex flex-col items-center mb-6">
          <img src="adoptme-logo.webp" alt="AdoptMe Logo" className="w-40" />
        </div>
        <h2 className="text-white text-xl font-bold mb-4">Iniciar sesión</h2>
        <input
          type="email"
          className="w-full p-2 mb-4 border-slate-300 bg-white focus:ring-[#1F6533] text-gray-900 border rounded focus:outline-none focus:ring-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full p-2 mb-4 border-slate-300 bg-white focus:ring-[#1F6533] text-gray-900 border rounded focus:outline-none focus:ring-2"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span className="text-md font-semibold text-white">
          O si aun no tienes cuenta,{" "}
          <Link className="font-bold underline decoration-solid" to="/register">
            Registrate
          </Link>
        </span>
        <button
          type="submit"
          className="w-full mt-3 bg-[#1F6533] text-white py-2 rounded hover:bg-[#175127] transition duration-200"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
