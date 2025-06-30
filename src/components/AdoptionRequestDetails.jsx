import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getAdoptionDetail } from "../api/adoptionApi";

const AdoptionRequestDetails = ({ adoption, onBack }) => {
  const { token } = useAuth();
  const [adoptionDetail, setAdoptionDetail] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!adoption || !token) return;

    getAdoptionDetail(token, adoption.id)
      .then(setAdoptionDetail)
      .catch((err) => setError(err.message));
  }, [token, adoptionDetail, adoption]);

  if (error)
    return (
      <p className="text-red-500 text-center mt-10 w-full">Error: {error}</p>
    );
  if (!adoptionDetail)
    return <p className="text-center mt-10 w-full">Cargando perfil...</p>;

  return (
    <div className="bg-white shadow p-6 rounded w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Detalle de adopción</h2>
        <button
          onClick={onBack}
          className="text-sm text-blue-600 underline hover:text-blue-800"
        >
          Volver a los pedidos
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Imagen */}
          <img
            src={adoptionDetail.adopter.photo_url}
            alt={adoptionDetail.pet.name}
            className="w-48 h-48 aspect-square object-cover rounded-full flex-shrink-0"
          />

          {/* Datos + mensaje */}
          <div className="flex flex-col gap-y-2 w-full ">
            <div className="flex flex-row gap-y-1">
              <div className="flex flex-col w-full gap-y-2">
                <h4 className="text-lg font-semibold">Solicitante</h4>
                <div className="flex justify-evenly">
                  <div>
                    <h5 className="font-semibold text-center">Nombre</h5>
                    <p>
                      {adoptionDetail.adopter.name}{" "}
                      {adoptionDetail.adopter.last_name}
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-center">Teléfono</h5>
                    <p>{adoptionDetail.adopter.phone_number}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-center">Ubicación</h5>
                    <p>{adoptionDetail.adopter.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {adoptionDetail.notes && (
              <div className="flex-1 ">
                <h5 className="font-semibold mb-2">Mensaje</h5>
                <div className="bg-gray-300 h-28 p-2 rounded-xl overflow-y-auto break-words">
                  <p>{adoptionDetail.notes}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <h2 className="text-xl font-semibold text-center">
          Buscando adoptar a
        </h2>

        <div className="flex items-center justify-center">
          {/* Datos */}
          <div className="flex justify-center">
            <div className="flex justify-center">
              <div className="flex w-full">
                <div className="flex-1 space-y-2 ml-3">
                  <h3 className="text-xl font-semibold">
                    {adoptionDetail.pet.name}
                  </h3>
                  <p>
                    <strong>Raza:</strong> {adoptionDetail.pet.breed}
                  </p>
                  <p>
                    <strong>Edad:</strong> {adoptionDetail.pet.age} años
                  </p>
                  <p>
                    <strong>Descripción:</strong>{" "}
                    {adoptionDetail.pet.description}
                  </p>
                  <div className="flex justify-center mt-4">
                    <button className="bg-[#555aa8] text-white p-2 rounded hover:bg-[#175127] transition duration-200">
                      Ver perfil de la mascota
                    </button>
                  </div>
                </div>
              </div>
              <img
                src={adoptionDetail.pet.photo_url}
                alt={adoptionDetail.pet.name}
                className="w-full md:w-1/3 h-48 object-cover rounded"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="w-full bg-[#1F6533] text-white py-2 rounded hover:bg-[#175127] transition duration-200">
            Aceptar adopcion
          </button>
          <button className="w-full bg-[#ca293f] text-white py-2 rounded hover:bg-[#711522] transition duration-200">
            Negar adopcion
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdoptionRequestDetails;
