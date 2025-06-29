import { useNavigate } from "react-router-dom";

const FormularioAdopcion = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto my-12 p-6 bg-white rounded-2xl shadow-lg relative">
      {/* Botón cerrar */}
      <button
        onClick={() => navigate("/como-adoptar")}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl"
      >
        &times;
      </button>

      {/* Imagen */}
      <img
        src="/public/vision.jpg"
        alt="Mascotas en adopción"
        className="w-full rounded-lg mb-6"
      />

      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F6533]"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Apellido"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F6533]"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Dirección"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F6533]"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F6533]"
          />
        </div>
        <div>
          <input
            type="tel"
            placeholder="Teléfono"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F6533]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#1F6533] text-white py-3 rounded-full font-semibold hover:bg-[#175127] transition-colors"
        >
          Siguiente
        </button>
      </form>
    </div>
  );
};

export default FormularioAdopcion;
