import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2";
import { createPost } from "../api/postApi";

const NewPetForm = ({ token, onBack, onRefresh }) => {
  const [photo, setPhoto] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (form) => {
    if (!photo) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Por favor, subí una imagen de perfil.",
      });
      return;
    }

    try {
      await createPost(form, photo, token);
      Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: "Mascota publicada correctamente.",
        timer: 2000,
        showConfirmButton: false,
      });
      onRefresh();
      onBack();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: err.message || "Ocurrió un error inesperado.",
      });
    }
  };

  return (
    <div className="bg-white shadow rounded w-full flex flex-col justify-center items-center">
      <div className="flex justify-between px-6 items-center mb-2 w-full">
        <h2 className="text-2xl font-semibold">Dar en adopción</h2>
        <button
          onClick={onBack}
          className="text-sm text-blue-600 underline hover:text-blue-800"
        >
          Volver a mi perfil
        </button>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-3xl p-2 md:p-6 bg-[#B5BF63] shadow-lg rounded md:mx-6  mt-2 mb-2 md:mb-0"
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

          <div>
            <select
              {...register("specie_id", {
                required: "Este campo es obligatorio",
              })}
              className="w-full p-2 mb-1 border-slate-300 bg-white focus:ring-[#1F6533] text-gray-900 border rounded focus:outline-none focus:ring-2"
            >
              <option value="">Seleccioná la especie</option>
              <option value="1">Perro</option>
              <option value="2">Gato</option>
            </select>
            {errors.specie_id && (
              <p className="text-sm text-red-200 -mt-1 mb-3">
                {errors.specie_id.message}
              </p>
            )}
          </div>

          <div>
            <select
              {...register("gender_id", {
                required: "Este campo es obligatorio",
              })}
              className="w-full p-2 mb-1 border-slate-300 bg-white focus:ring-[#1F6533] text-gray-900 border rounded focus:outline-none focus:ring-2"
            >
              <option value="">Seleccioná el sexo</option>
              <option value="1">Macho</option>
              <option value="2">Hembra</option>
            </select>
            {errors.gender_id && (
              <p className="text-sm text-red-200 -mt-1 mb-3">
                {errors.gender_id.message}
              </p>
            )}
          </div>

          <div>
            <select
              {...register("size_id", {
                required: "Este campo es obligatorio",
              })}
              className="w-full p-2 mb-1 border-slate-300 bg-white focus:ring-[#1F6533] text-gray-900 border rounded focus:outline-none focus:ring-2"
            >
              <option value="">Seleccioná el tamaño</option>
              <option value="1">Pequeño</option>
              <option value="2">Mediano</option>
              <option value="3">Grande</option>
            </select>
            {errors.size_id && (
              <p className="text-sm text-red-200 -mt-1 mb-3">
                {errors.size_id.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("breed", { required: "Este campo es obligatorio" })}
              placeholder="Raza"
              className="w-full p-2 mb-1 border-slate-300 bg-white focus:ring-[#1F6533] text-gray-900 border rounded focus:outline-none focus:ring-2"
            />
            {errors.breed && (
              <p className="text-sm text-red-200 -mt-1 mb-3">
                {errors.breed.message}
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

          <div className="col-span-1 md:col-span-2">
            <textarea
              {...register("description", {
                required: "Este campo es obligatorio",
              })}
              placeholder="Descripción"
              className="w-full h-32 p-2 mb-1 border-slate-300 bg-white focus:ring-[#1F6533] text-gray-900 border rounded resize-none overflow-y-auto focus:outline-none focus:ring-2"
            />
            {errors.description && (
              <p className="text-sm text-red-200 -mt-1 mb-3">
                {errors.description.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="block w-full text-sm text-slate-700 file:mr-4 file:py-2 file:px-4 file:border file:rounded file:text-sm file:font-semibold file:bg-indigo-50 file:text-[#1F6533] hover:file:bg-indigo-100"
            />
            {!photo && (
              <p className="text-sm text-red-200 mt-1">
                Por favor, subí una imagen de perfil
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-3 bg-[#1F6533] text-white py-2 rounded hover:bg-[#175127] transition duration-200"
        >
          Publicar mascota
        </button>
      </form>
    </div>
  );
};

export default NewPetForm;
