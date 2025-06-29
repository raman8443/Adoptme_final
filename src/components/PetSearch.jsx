import React, { useEffect, useState } from "react";
import { getPosts } from "../api/postApi";
import { NavLink } from "react-router-dom";

const PetSearch = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // filtros
  const [size, setSize] = useState("");
  const [ageRange, setAgeRange] = useState(""); // ej: "0-2", "3-5", etc
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    fetchPets();
  }, [size, ageRange, gender, location]);

  const fetchPets = () => {
    setLoading(true);
    getPosts({ size, ageRange, gender, location }) // ajusta tu api/postApi.js
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center text-[#a77f1a] mb-8">
        Puedes Filtrar
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="border rounded p-2 shadow-sm"
        >
          <option value="">Tamaño</option>
          <option value="pequeño">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>
        </select>

        <select
          value={ageRange}
          onChange={(e) => setAgeRange(e.target.value)}
          className="border rounded p-2 shadow-sm"
        >
          <option value="">Edad</option>
          <option value="0-2">0-2 años</option>
          <option value="3-5">3-5 años</option>
          <option value="6-10">6-10 años</option>
          <option value="11-20">+10 años</option>
        </select>

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border rounded p-2 shadow-sm"
        >
          <option value="">Sexo</option>
          <option value="macho">Macho</option>
          <option value="hembra">Hembra</option>
        </select>

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded p-2 shadow-sm"
        >
          <option value="">Barrio</option>
          <option value="palermo">Palermo</option>
          <option value="recoleta">Recoleta</option>
          <option value="caballito">Caballito</option>
          <option value="flores">Flores</option>
          <option value="villa urquiza">Villa Urquiza</option>
          {/* agrega más barrios */}
        </select>
      </div>

      {loading ? (
        <div className="flex flex-wrap justify-center gap-6 p-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
              key={idx}
              className="animate-pulse flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-80"
            >
              <div className="relative h-56 m-2.5 overflow-hidden rounded-md bg-slate-200"></div>
              <div className="p-4 space-y-2">
                <div className="h-6 bg-slate-300 rounded w-3/4"></div>
                <div className="space-y-1">
                  <div className="h-4 bg-slate-200 rounded w-full"></div>
                  <div className="h-4 bg-slate-200 rounded w-5/6"></div>
                </div>
              </div>
              <div className="px-4 pb-4">
                <div className="h-9 bg-slate-300 rounded w-full"></div>
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <p className="text-center mt-10 text-red-600">Error: {error}</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6 p-4">
          {posts.map((pet) => (
            <div
              key={pet.id}
              className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-80"
            >
              <div className="relative h-56 m-2.5 overflow-hidden rounded-md">
                <img
                  src={pet.photo_url}
                  alt={pet.name}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  {pet.name} ({pet.gender})
                </h6>
                <p className="text-slate-600 leading-normal font-light text-sm">
                  <strong>Edad:</strong> {pet.age} año
                  {pet.age !== 1 ? "s" : ""} <br />
                  <strong>Raza:</strong> {pet.breed} <br />
                  <strong>Tamaño:</strong> {pet.size} <br />
                  <strong>Ubicación:</strong> {pet.user?.location}
                </p>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <NavLink
                  to={`/mascota/${pet.id}`}
                  className="inline-block text-center rounded-md bg-slate-800 py-2 px-4 text-sm text-white transition-all shadow-md hover:bg-slate-600"
                >
                  Ver más
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PetSearch;
