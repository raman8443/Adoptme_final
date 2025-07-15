import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  getAdoptionDetail,
  approveAdoption,
  denyAdoption,
} from "../api/adoptionApi";

const AdoptionRequestDetails = ({ adoption, onBack, onRefresh }) => {
  const { token } = useAuth();
  const [adoptionDetail, setAdoptionDetail] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!adoption || !token) return;

    getAdoptionDetail(token, adoption.id)
      .then(setAdoptionDetail)
      .catch((err) => setError(err.message));
  }, [token, adoption]);

  const STATUS_IDS = {
    PENDIENTE: 1,
    APROBADO: 2,
    RECHAZADO: 3,
  };

  const statusColors = {
    pendiente: "bg-yellow-400",
    aprobado: "bg-green-500",
    rechazado: "bg-red-500",
  };

  const handleApprove = async () => {
    try {
      await approveAdoption(adoption.id, token);
      alert("✅ Adopción aprobada correctamente");
      onRefresh();
      onBack();
    } catch (err) {
      alert("Error al aprobar la adopción: " + err.message);
    }
  };

  const handleDeny = async () => {
    try {
      await denyAdoption(adoption.id, token);
      alert("✅ Adopción rechazada correctamente");
      onRefresh();
      onBack();
    } catch (err) {
      alert("Error al rechazar la adopción: " + err.message);
    }
  };

  if (error)
    return (
      <p className="text-red-500 text-center mt-10 w-full">Error: {error}</p>
    );
  if (!adoptionDetail)
    return <p className="text-center mt-10 w-full">Cargando perfil...</p>;

  return (
    <div className="bg-white rounded-xl shadow p-6 md:p-10 w-full mx-auto space-y-12 h-fit">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Detalle de adopción
        </h2>
        <button
          onClick={onBack}
          className="text-sm md:text-base text-blue-600 hover:underline"
        >
          Volver a los pedidos
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Solicitante */}
        <div className="space-y-6">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-700">
            Solicitante
          </h3>
          <div className="flex items-center gap-6">
            <img
              src={adoptionDetail.adopter.photo_url}
              alt="Avatar del solicitante"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border shadow"
            />
            <div className="space-y-2 text-md md:text-base text-gray-700">
              <p>
                <span className="font-medium">Nombre:</span>{" "}
                {adoptionDetail.adopter.name} {adoptionDetail.adopter.last_name}
              </p>
              <p>
                <span className="font-medium">Teléfono:</span>{" "}
                {adoptionDetail.adopter.phone_number}
              </p>
              <p>
                <span className="font-medium">Ubicación:</span>{" "}
                {adoptionDetail.adopter.location}
              </p>
            </div>
          </div>
          {adoptionDetail.notes && (
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1 text-md md:text-base">
                Mensaje:
              </p>
              <div className="bg-gray-100 p-3 rounded-md text-gray-800 text-md md:text-base whitespace-pre-line">
                {adoptionDetail.notes}
              </div>
            </div>
          )}
        </div>

        {/* Mascota */}
        <div className="space-y-6">
          <h3 className="text-lg md:text-2xl font-semibold text-gray-700">
            Mascota solicitada
          </h3>
          <div className="flex items-center gap-6">
            <img
              src={adoptionDetail.pet.photo_url}
              alt={`Foto de ${adoptionDetail.pet.name}`}
              className="w-30 h-30 md:w-40 md:h-40 rounded-xl object-cover border shadow"
            />
            <div className="text-md md:text-base text-gray-700 space-y-2">
              <p>
                <span className="font-medium">Nombre:</span>{" "}
                {adoptionDetail.pet.name}
              </p>
              <p>
                <span className="font-medium">Raza:</span>{" "}
                {adoptionDetail.pet.breed}
              </p>
              <p>
                <span className="font-medium">Edad:</span>{" "}
                {adoptionDetail.pet.age} año
                {adoptionDetail.pet.age !== 1 && "s"}
              </p>
              <p>
                <span className="font-medium">Estado:</span>
                <span
                  className={`ml-2 inline-block px-2 py-0.5 bg-opacity-80 text-white rounded-full text-xs md:text-sm ${
                    statusColors[adoptionDetail.pet.status.toLowerCase()] ||
                    "bg-gray-400"
                  }`}
                >
                  {adoptionDetail.pet.status}
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-md font-medium text-gray-700 mb-1 md:text-base">
              Descripción:
            </p>
            <p className="text-md md:text-base text-gray-800">
              {adoptionDetail.pet.description}
            </p>
          </div>
          <Link
            to={`/mascota/${adoptionDetail.pet.id}`}
            className="inline-block mt-3 bg-indigo-600 text-white text-sm md:text-base px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Ver perfil de la mascota
          </Link>
        </div>
      </div>

      {adoptionDetail.status_id === STATUS_IDS.PENDIENTE && (
        <div className="flex gap-4 justify-center pt-6 border-t">
          <button
            onClick={handleApprove}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition cursor-pointer"
          >
            Aceptar
          </button>
          <button
            onClick={handleDeny}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition cursor-pointer"
          >
            Negar
          </button>
        </div>
      )}
    </div>
  );
};

export default AdoptionRequestDetails;
