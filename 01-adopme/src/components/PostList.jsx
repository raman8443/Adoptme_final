// src/components/PostList.jsx
import React, { useEffect, useState } from "react";
import { getPosts } from "../api/postApi";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-10">Cargando mascotas...</p>;
  if (error)
    return <p className="text-center mt-10 text-red-600">Error: {error}</p>;

  return (
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
              {pet.name} ({pet.specie})
            </h6>
            <p className="text-slate-600 leading-normal font-light text-sm">
              <strong>Edad:</strong> {pet.age} año{pet.age !== 1 ? "s" : ""}{" "}
              <br />
              <strong>Raza:</strong> {pet.breed} <br />
              <strong>Tamaño:</strong> {pet.size} <br />
              <strong>Ubicación:</strong> {pet.user?.location}
            </p>
          </div>

          <div className="px-4 pb-4 pt-0 mt-2">
            <button
              className="rounded-md bg-slate-800 py-2 px-4 text-sm text-white transition-all shadow-md hover:bg-slate-700"
              type="button"
            >
              Ver más
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
