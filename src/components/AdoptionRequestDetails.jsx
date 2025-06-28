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

      <div className="flex flex-col md:flex-row gap-4">
        {/* Imagen de la mascota */}
        <img
          src={adoptionDetail.pet.photo_url}
          alt={adoptionDetail.pet.name}
          className="w-full md:w-1/3 h-64 object-cover rounded"
        />

        {/* Datos */}
        <div className="flex-1 space-y-2">
          <h3 className="text-xl font-semibold">{adoptionDetail.pet.name}</h3>
          <p>
            <strong>Raza:</strong> {adoptionDetail.pet.breed}
          </p>
          <p>
            <strong>Edad:</strong> {adoptionDetail.pet.age} años
          </p>
          <p>
            <strong>Descripción:</strong> {adoptionDetail.pet.description}
          </p>

          <h4 className="mt-4 text-lg font-semibold">Solicitante</h4>
          <p>
            {adoptionDetail.adopter.name} {adoptionDetail.adopter.last_name} -{" "}
            {adoptionDetail.adopter.phone_number}
          </p>

          <p>
            <strong>Estado:</strong> {adoptionDetail.status}
          </p>
          {adoptionDetail.notes && (
            <p>
              <strong>Mensaje:</strong> {adoptionDetail.notes}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdoptionRequestDetails;
