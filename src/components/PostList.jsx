// src/components/PostList.jsx
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

  if (loading) {
    return (
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {Array.from({ length: 2 }).map((_, idx) => (
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
                <div className="h-4 bg-slate-200 rounded w-4/6"></div>
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
              </div>
            </div>

            <div className="px-4 pb-4">
              <div className="h-9 bg-slate-300 rounded w-full"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
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
              {pet.name} ({pet.gender})
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
            <NavLink
              to={`/mascota/${pet.id}`}
              className="inline-block text-center rounded-md bg-slate-800 py-2 px-4 text-sm text-white transition-all shadow-md hover:bg-slate-700"
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
