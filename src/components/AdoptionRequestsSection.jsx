import { useEffect, useState } from "react";
import { getAdoptionPreviews } from "../api/adoptionApi";
import AdoptionRequestDetails from "./AdoptionRequestDetails";

const STATUS_IDS = {
  PENDIENTE: 1,
  APROBADO: 2,
  RECHAZADO: 3,
};

const AdoptionRequestsSection = ({ token, onBack, onRefresh }) => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(null); // null muestra todos
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    getAdoptionPreviews(token)
      .then(setRequests)
      .catch((err) => setError(err.message));
    onRefresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const refetchData = () => {
    if (!token) return;

    getAdoptionPreviews(token)
      .then(setRequests)
      .catch((err) => setError(err.message));
  };

  if (error)
    return <p className="text-red-500 text-center mt-10">Error: {error}</p>;

  // Clasificación por estado
  const pending = requests.filter((r) => r.status_id === STATUS_IDS.PENDIENTE);
  const approved = requests.filter((r) => r.status_id === STATUS_IDS.APROBADO);
  const rejected = requests.filter((r) => r.status_id === STATUS_IDS.RECHAZADO);

  const getFilteredRequests = () => {
    switch (filter) {
      case STATUS_IDS.PENDIENTE:
        return pending;
      case STATUS_IDS.APROBADO:
        return approved;
      case STATUS_IDS.RECHAZADO:
        return rejected;
      default:
        return requests;
    }
  };

  const filteredRequests = getFilteredRequests();

  return selectedRequest ? (
    <AdoptionRequestDetails
      adoption={selectedRequest}
      onBack={() => {
        setSelectedRequest(null);
        refetchData(); // <-- Actualiza la lista al volver atrás
      }}
      onRefresh={() => {
        refetchData(); // <-- Actualiza la lista local
        onRefresh(); // <-- Actualiza el padre
      }} // <--- este es el que viene de ProfilePage
    />
  ) : (
    <div className="bg-white shadow p-6 rounded w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Pedidos de adopción</h2>
        <button
          onClick={onBack}
          className="text-sm text-blue-600 underline hover:text-blue-800"
        >
          Volver a mi perfil
        </button>
      </div>

      {/* Botones de filtro */}
      <div className="flex gap-2 mb-4 flex-wrap">
        {pending.length > 0 && (
          <button
            onClick={() => setFilter(STATUS_IDS.PENDIENTE)}
            className={`px-3 py-1 rounded text-white ${
              filter === STATUS_IDS.PENDIENTE
                ? "bg-yellow-600"
                : "bg-yellow-400 hover:bg-yellow-500"
            }`}
          >
            Pendientes ({pending.length})
          </button>
        )}
        {approved.length > 0 && (
          <button
            onClick={() => setFilter(STATUS_IDS.APROBADO)}
            className={`px-3 py-1 rounded text-white ${
              filter === STATUS_IDS.APROBADO
                ? "bg-green-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            Aprobados ({approved.length})
          </button>
        )}
        {rejected.length > 0 && (
          <button
            onClick={() => setFilter(STATUS_IDS.RECHAZADO)}
            className={`px-3 py-1 rounded text-white ${
              filter === STATUS_IDS.RECHAZADO
                ? "bg-red-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            Rechazados ({rejected.length})
          </button>
        )}
        {(filter !== null || requests.length > 0) && (
          <button
            onClick={() => setFilter(null)}
            className="px-3 py-1 rounded bg-gray-300 hover:bg-gray-400"
          >
            Ver todos
          </button>
        )}
      </div>

      {/* Lista de previews */}
      {filteredRequests.length === 0 ? (
        <p className="text-gray-600">No hay pedidos de adopción.</p>
      ) : (
        <div className="space-y-4">
          {filteredRequests.map((req) => (
            <div
              key={req.id}
              onClick={() => setSelectedRequest(req)}
              className="border p-4 rounded shadow bg-gray-50 space-y-1 cursor-pointer hover:bg-gray-100"
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
              {req.notes && (
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
