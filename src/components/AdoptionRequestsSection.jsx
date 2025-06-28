import { useEffect, useState } from "react";
import { getAdoptionPreviws } from "../api/adoptionApi";

const AdoptionRequestsSection = ({ token, onBack }) => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAdoptionPreviws(token)
      .then(setRequests)
      .catch((err) => setError(err.message));
  }, [token]);

  if (error)
    return <p className="text-red-500 text-center mt-10">Error: {error}</p>;

  return (
    <div className="bg-white shadow p-6 rounded col-span-1 md:col-span-1">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Pedidos de adopción</h2>
        <button
          onClick={onBack}
          className="text-sm text-blue-600 underline hover:text-blue-800"
        >
          Volver a mi perfil
        </button>
      </div>
      {requests.length === 0 ? (
        <p className="text-gray-600">No hay pedidos de adopción.</p>
      ) : (
        <div className="space-y-4">
          {requests.map((req) => (
            <div
              key={req.id}
              className="border p-4 rounded shadow bg-gray-50 space-y-1"
            >
              <p>
                <strong>Mascota:</strong> {req.pet_name}
              </p>
              <p>
                <strong>Estado:</strong> {req.status}
              </p>
              <p>
                <strong>Solicitante:</strong> {req.adopter_name}{" "}
                {req.adopter_last_name}
              </p>
              {req.message && (
                <p>
                  <strong>Mensaje:</strong> {req.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdoptionRequestsSection;
