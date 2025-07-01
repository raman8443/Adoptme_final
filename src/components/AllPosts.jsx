import React, { useEffect, useState } from "react";
import { getPosts } from "../api/postApi";
import { NavLink } from "react-router-dom";

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

  if (error)
    return <p className="text-center mt-10 text-red-600">Error: {error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto">
      {loading
        ? Array.from({ length: 9 }).map((_, idx) => (
            <div
              key={idx}
              className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full"
            >
              <div className="relative h-56 m-2.5 overflow-hidden rounded-md">
                <div className="w-full h-full bg-slate-200 animate-pulse rounded-md" />
              </div>
              <div className="p-4">
                <div className="h-6 bg-slate-300 rounded w-3/4 mb-2 animate-pulse" />
                <div className="space-y-1">
                  <div className="h-4 bg-slate-200 rounded w-full animate-pulse" />
                  <div className="h-4 bg-slate-200 rounded w-5/6 animate-pulse" />
                  <div className="h-4 bg-slate-200 rounded w-4/6 animate-pulse" />
                  <div className="h-4 bg-slate-200 rounded w-3/4 animate-pulse" />
                </div>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <div className="h-9 bg-slate-300 rounded w-full animate-pulse" />
              </div>
            </div>
          ))
        : posts.map((pet, idx) => (
            <div
              key={pet?.id || idx}
              className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-full"
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
                  className="inline-block text-center rounded-md bg-slate-800 py-2 px-4 text-sm text-white transition-all shadow-md hover:bg-slate-700 w-full"
                >
                  Ver más
                </NavLink>
              </div>
            </div>
          ))}
    </div>
  );
};

export default PostList;
