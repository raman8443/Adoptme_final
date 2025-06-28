import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getCurrentUser } from "../api/userApi";
import { Link, useNavigate } from "react-router-dom";
import MiniCard from "../components/MiniCard";
import { getPostsByUser } from "../api/postApi";
import { getAdoptionsByUser, getAdoptionPreviews } from "../api/adoptionApi";
import AdoptionRequestsSection from "../components/AdoptionRequestsSection";
import NewPetForm from "../components/NewPetForm";

const ProfilePage = () => {
  const { token } = useAuth();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [ownPets, setOwnPets] = useState([]);
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [adoptionRequests, setAdoptionRequests] = useState([]);
  const [showAdoptionRequests, setShowAdoptionRequests] = useState(false);
  const [showNewPetForm, setShowNewPetForm] = useState(false);
  /*const [favoritePets, setFavoritePets] = useState([]);*/

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) return;

    getCurrentUser(token)
      .then(setUser)
      .catch((err) => setError(err.message));

    getPostsByUser(token)
      .then(setOwnPets)
      .catch((err) => setError(err.message));

    getAdoptionsByUser(token)
      .then(setAdoptedPets)
      .catch((err) => setError(err.message));

    getAdoptionPreviews(token)
      .then(setAdoptionRequests)
      .catch((err) => setError(err.message));
  }, [token]);

  const handleBackToProfile = () => {
    setShowAdoptionRequests(false);
    setShowNewPetForm(false);
  };

  if (error)
    return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  if (!user) return <p className="text-center mt-10">Cargando perfil...</p>;

  return (
    <div className="flex justify-center min-h-screen p-4">
      <div className="mt-32 max-w-[1100px] w-full md:w-[1100px] flex flex-col md:flex-row">
        <div className="bg-white h-fit rounded w-full md:w-[40%] md:mr-2 mb-3 md:mb-0">
          <div className="w-full shadow p-6 rounded">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h2 className="text-2xl text-center font-semibold mb-2">
              {user.name} {user.lastName}
            </h2>
            <p className="text-center text-gray-600">{user.email}</p>
            <div className="mt-4 text-md text-gray-700 space-y-1">
              <p className="text-md font-semibold">
                <strong>Edad:</strong> {user.age}
              </p>
              <p className="text-md font-semibold">
                <strong>Género:</strong> {user.gender}
              </p>
              <p className="text-md font-semibold">
                <strong>Ubicación:</strong> {user.location}
              </p>
            </div>
            <div className="mt-4 space-y-3">
              <button
                onClick={() => navigate("/dar-adopcion")}
                className="w-full bg-[#1F6533] text-white py-2 rounded hover:bg-[#175127] transition duration-200"
              >
                Buscar mascota
              </button>
              <button
                onClick={() => setShowNewPetForm(true)}
                className="w-full bg-[#1F6533] text-white py-2 rounded hover:bg-[#175127] transition duration-200"
              >
                Dar en adopción
              </button>
              {adoptionRequests.length > 0 && (
                <button
                  onClick={() => setShowAdoptionRequests(true)}
                  className="w-full bg-[#1F6533] text-white py-2 rounded hover:bg-[#175127] transition duration-200"
                >
                  Ver pedidos de adopción
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Render adoption requests or pet sections */}
        {showAdoptionRequests ? (
          <AdoptionRequestsSection token={token} onBack={handleBackToProfile} />
        ) : showNewPetForm ? (
          <NewPetForm token={token} onBack={handleBackToProfile} />
        ) : (
          <div className="w-full flex-row">
            {ownPets.length > 0 && (
              <div className=" bg-white shadow p-6 rounded">
                <h2 className="text-2xl font-semibold mb-2">
                  Mascotas dadas en adopción
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {ownPets.map((pet) => (
                    <MiniCard key={pet.id} pet={pet} />
                  ))}
                </div>
              </div>
            )}
            {adoptedPets.length > 0 && (
              <div className=" bg-white shadow p-6 rounded mt-4">
                <h2 className="text-2xl font-semibold mb-2">
                  Mascotas adoptadas o en proceso
                </h2>
                <div>
                  {adoptedPets.map((pet) => (
                    <MiniCard key={pet.id} pet={pet.pet} />
                  ))}
                </div>
              </div>
            )}
            {/*
          {favoritePets.length > 0 && (
            <div className="col-span-1 md:col-start-2 bg-white shadow p-6 rounded">
              <h2 className="text-2xl font-semibold mb-2">Favoritos</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {favoritePets.map((pet) => (
                  <MiniCard key={pet.id} pet={pet} />
                ))}
              </div>
            </div>
          )}    
          */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
