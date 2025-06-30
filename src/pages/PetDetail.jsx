import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPost } from "../api/postApi";
import { postAdoptionRequest } from "../api/adoptionApi"; // Asegurate de tener esta función
import { useAuth } from "../context/AuthContext";
import { checkIfUserRequested } from "../api/adoptionApi";

const PetDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [hasRequested, setHasRequested] = useState(false);
  const { token, user } = useAuth();
  const isOwner = pet?.user?.user_id && user?.id === pet.user.user_id;

  useEffect(() => {
    if (!id || !token) return;

    getPost(id)
      .then((data) => setPet(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));

    checkIfUserRequested(id, token)
      .then((data) => setHasRequested(data.requested))
      .catch(() => setHasRequested(false));
  }, [id, token]);
  const statusColors = {
    Adoptado: "bg-blue-500",
    Publicado: "bg-green-500",
    Reservado: "bg-yellow-500",
    Inactivo: "bg-gray-400",
  };

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-600">Cargando mascota...</p>
    );
  }

  if (error) {
    return <p className="text-center mt-10 text-red-600">Error: {error}</p>;
  }

  if (!pet) {
    return <p className="text-center mt-10">No se encontró la mascota.</p>;
  }

  const statusClass = statusColors[pet.status] || "bg-gray-400";

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-4xl mx-auto mt-16 p-6 bg-white shadow-lg rounded-2xl">
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src={pet.photo_url}
              alt={pet.name}
              className="w-full md:w-1/2 h-80 object-cover rounded-xl shadow"
            />

            <div className="flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-800">{pet.name}</h1>
                <span
                  className={`text-white text-sm px-3 py-1 rounded-full ${statusClass}`}
                >
                  {pet.status}
                </span>
              </div>

              <p className="text-gray-700">{pet.description}</p>

              <div className="grid grid-cols-2 gap-4 mt-4 text-gray-600">
                <div>
                  <strong>Edad:</strong> {pet.age} año{pet.age !== 1 && "s"}
                </div>
                <div>
                  <strong>Género:</strong> {pet.gender}
                </div>
                <div>
                  <strong>Raza:</strong> {pet.breed}
                </div>
                <div>
                  <strong>Tamaño:</strong> {pet.size}
                </div>
                <div>
                  <strong>Especie:</strong> {pet.specie}
                </div>
                <div>
                  <strong>Fecha de publicación:</strong>{" "}
                  {new Date(pet.created_at).toLocaleDateString()}
                </div>
              </div>

              <div className="mt-6 border-t pt-4">
                <h2 className="text-xl font-semibold mb-2">Publicado por</h2>
                <p className="text-gray-700">
                  {pet.user.name} {pet.user.last_name} –{" "}
                  <span className="text-sm text-gray-500">
                    {pet.user.location}
                  </span>
                </p>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => navigate(-1)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
                >
                  Volver
                </button>
                {pet.status === "Publicado" &&
                  !isOwner &&
                  (hasRequested ? (
                    <button
                      disabled
                      className="ml-4 bg-gray-300 text-gray-600 px-4 py-2 rounded cursor-not-allowed"
                    >
                      Solicitud ya enviada
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="ml-4 bg-[#1F6533] text-white px-4 py-2 rounded hover:bg-[#175127] transition"
                    >
                      Postularme a adoptar
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg shadow-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Mensaje de adopción</h2>
            <textarea
              rows={5}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Contanos por qué querés adoptar..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={async () => {
                  if (!message.trim())
                    return alert("Por favor, escribí un mensaje.");
                  setSubmitting(true);
                  try {
                    await postAdoptionRequest(
                      { pet_id: pet.id, notes: message },
                      token
                    );
                    alert("✅ Tu solicitud fue enviada con éxito");
                    setIsModalOpen(false);
                    setMessage("");
                    setHasRequested(true); // <-- actualiza el estado
                  } catch (err) {
                    alert("❌ Error al enviar la solicitud: " + err.message);
                  } finally {
                    setSubmitting(false);
                  }
                }}
                disabled={submitting}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
              >
                {submitting ? "Enviando..." : "Enviar solicitud"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PetDetailPage;
