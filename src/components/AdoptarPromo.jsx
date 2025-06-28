import { useNavigate } from "react-router-dom";

const AdoptarPromo = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 p-8 bg-green-50 rounded-2xl shadow max-w-5xl mx-auto my-12">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold text-[#1F6533] mb-4">
          ¡Animate a Adoptar!
        </h2>
        <p className="text-gray-700 mb-6">
          Dale una segunda oportunidad a quien más lo necesita. Adopta desde la comodidad de tu hogar.
        </p>
        <button
          onClick={() => navigate("/formulario-adopcion")}
          className="bg-transparent border-2 border-[#1F6533] text-[#1F6533] px-6 py-3 rounded-full font-medium hover:bg-[#1F6533] hover:text-white transition-colors"
        >
          Formulario de Adopción
        </button>
      </div>

      <div className="flex-1">
        <img
          src="/public/vision.jpg"
          alt="Mascotas felices"
          className="rounded-xl shadow-md w-full"
        />
      </div>
    </section>
  );
};

export default AdoptarPromo;
