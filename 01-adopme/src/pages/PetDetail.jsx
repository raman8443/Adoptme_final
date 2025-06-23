import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/postApi"; // ajustá la ruta si es distinta

const PetDetailPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPost(id)
      .then((data) => setPet(data))
      .catch((err) => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [id]);

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

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        {pet.name}
      </h1>
      <div className="space-y-3 text-gray-700 text-lg">
        <img
          src={pet.photo_url}
          alt={pet.name}
          className="object-cover w-full h-full rounded-md"
        />
        <p>
          <strong>Edad:</strong> {pet.age} año{pet.age !== 1 ? "s" : ""}
        </p>
        <p>
          <strong>Género:</strong> {pet.gender}
        </p>
        <p>
          <strong>Especie:</strong> {pet.specie}
        </p>
        {/* Podés agregar más campos como raza, ubicación, etc. */}
      </div>
    </div>
  );
};

export default PetDetailPage;
