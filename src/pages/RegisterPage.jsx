import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";
import { useState } from "react";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (form) => {
    if (!avatar) {
      Swal.fire({
        icon: "warning",
        title: "Imagen requerida",
        text: "Por favor, subí una imagen de perfil.",
      });
      return;
    }

    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    formData.append("avatar", avatar);

    try {
      await registerUser(formData);

      Swal.fire({
        icon: "success",
        title: "¡Registro exitoso!",
        text: "Tu cuenta fue creada correctamente.",
        confirmButtonColor: "#1F6533",
      }).then(() => {
        navigate("/login");
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error al registrarse",
        text: err.message || "Ocurrió un problema.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl p-6 bg-[#B5BF63] shadow-lg rounded mx-2 mt-24 mb-10 md:mt-16 md:mb-0"
      >
        <div className="flex flex-col items-center mb-6">
          <img src="adoptme-logo.webp" alt="AdoptMe Logo" className="w-40" />
        </div>
        <h2 className="text-white text-xl font-bold mb-4">Registrarse</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              {...register("name", { required: "Este campo es obligatorio" })}
              placeholder="Nombre"
              className="w-full p-2 mb-1 border-slate-300 bg-white focus:ring-[#1F6533] text-gray-900 border rounded focus:outline-none focus:ring-2"
            />
            {errors.name && (
              <p className="text-sm text-red-200 -mt-1 mb-3">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Apellido */}
          <div>
            <input
              {...register("last_name", {
                required: "Este campo es obligatorio",
              })}
              placeholder="Apellido"
              className="w-full p-2 mb-1 border-slate-300 bg-white focus:ring-[#1F6533] text-gray-900 border rounded focus:outline-none focus:ring-2"
            />
            {errors.last_name && (
              <p className="text-sm text-red-200 -mt-1 mb-3">
                {errors.last_name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              {...register("email", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Email no válido",
                },
              })}
              placeholder="Email"
              type="email"
              className="w-full p-2 mb-1 border-slate-300 bg-white focus:ring-[#1F6533] text-gray-900 border rounded focus:outline-none focus:ring-2"
            />
            {errors.email && (
              <p className="text-sm text-red-200 -mt-1 mb-3">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <input
              {...register("password", {
                required: "Este campo es obligatorio",
              })}
              placeholder="Contraseña"
              type="password"
              className="w-full p-2 mb-4 border-slate-300 bg-white focus:ring-[#1F6533] text-gray-900 border rounded focus:outline-none focus:ring-2"
            />
            {errors.password && (
              <p className="text-sm text-red-200 -mt-1 mb-3">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <input
              {...register("phone_number", {
                required: "Este campo es obligatorio",
              })}
              placeholder="Teléfono"
              className="w-full p-2 mb-4 border-slate-300 bg-white focus:ring-[#1F6533] text-gray-900 border rounded focus:outline-none focus:ring-2"
            />
            {errors.phone_number && (
              <p className="text-sm text-red-200 -mt-1 mb-3">
                {errors.phone_number.message}
              </p>
            )}
          </div>
          <div>
            <input
              {...register("location", {
                required: "Este campo es obligatorio",
              })}
              placeholder="Ubicación"
              className="w-full p-2 mb-4 border-slate-300 bg-white focus:ring-[#1F6533] text-gray-900 border rounded focus:outline-none focus:ring-2"
            />
            {errors.location && (
              <p className="text-sm text-red-200 -mt-1 mb-3">
                {errors.location.message}
              </p>
            )}
          </div>
          <div>
            <input
              {...register("age", {
                required: "Este campo es obligatorio",
              })}
              type="number"
              placeholder="Edad"
              className="w-full p-2 mb-4 border-slate-300 bg-white focus:ring-[#1F6533] text-gray-900 border rounded focus:outline-none focus:ring-2"
            />
            {errors.age && (
              <p className="text-sm text-red-200 -mt-1 mb-3">
                {errors.age.message}
              </p>
            )}
          </div>
          <div>
            <select
              {...register("gender_id", {
                required: "Este campo es obligatorio",
              })}
              className="w-full p-2 mb-1 border-slate-300 bg-white focus:ring-[#1F6533] text-gray-900 border rounded focus:outline-none focus:ring-2 cursor-pointer"
            >
              <option value="">Seleccioná tu género</option>
              <option value="1">Masculino</option>
              <option value="2">Femenino</option>
              <option value="3">Otro</option>
            </select>
            {errors.gender_id && (
              <p className="text-sm text-red-200 -mt-1 mb-3">
                {errors.gender_id.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setAvatar(e.target.files[0])}
              className="block w-full text-sm text-slate-700 file:mr-4 file:py-2 file:px-4 file:border file:rounded file:text-sm file:font-semibold file:bg-indigo-50 file:text-[#1F6533] hover:file:bg-indigo-100"
            />
            {!avatar && (
              <p className="text-sm text-red-200 mt-1">
                Por favor, subí una imagen de perfil
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-3 bg-[#1F6533] text-white py-2 rounded hover:bg-[#175127] transition duration-200 cursor-pointer"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
