import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RegisterPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    last_name: "",
    age: "",
    gender_id: "",
    location: "",
    phone_number: "",
  });

  const [avatar, setAvatar] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Añadir campos de texto
    for (const key in form) {
      formData.append(key, form[key]);
    }

    // Añadir imagen
    if (avatar) {
      formData.append("avatar", avatar);
    }

    try {
      const res = await fetch(
        "https://proyecto-adopcion-de-mascotas.onrender.com/api/auth/register",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      // Login automático (opcional)
      login(data.user, data.token);
      navigate("/");
    } catch (err) {
      alert("Error al registrarse: " + err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">Registrarse</h2>

      <input
        name="name"
        placeholder="Nombre"
        required
        onChange={handleChange}
        className="input"
      />
      <input
        name="last_name"
        placeholder="Apellido"
        required
        onChange={handleChange}
        className="input"
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        onChange={handleChange}
        className="input"
      />
      <input
        name="password"
        type="password"
        placeholder="Contraseña"
        required
        onChange={handleChange}
        className="input"
      />
      <input
        name="phone_number"
        placeholder="Teléfono"
        onChange={handleChange}
        className="input"
      />
      <input
        name="location"
        placeholder="Ubicación"
        onChange={handleChange}
        className="input"
      />
      <input
        name="age"
        type="number"
        placeholder="Edad"
        onChange={handleChange}
        className="input"
      />

      <select
        name="gender_id"
        onChange={handleChange}
        required
        className="input"
      >
        <option value="">Seleccioná tu género</option>
        <option value="1">Masculino</option>
        <option value="2">Femenino</option>
        <option value="3">Otro</option>
      </select>

      <input
        type="file"
        name="avatar"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-slate-700 file:mr-4 file:py-2 file:px-4 file:border file:rounded file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500"
      >
        Registrarse
      </button>
    </form>
  );
};

export default RegisterPage;
