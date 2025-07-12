import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
        bg-gradient-to-r from-[#a8af5e]/30 via-[#b1b348]/30 to-[#b1b348]/30
        backdrop-blur-md
        border-b border-green-300/30
        shadow-lg"
    >
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/adoptme-logo-2.webp" alt="avatar" className="h-12" />
          <span className="text-2xl font-bold text-white">
            Adopt<span className="text-green-700">Me</span>
          </span>
        </Link>

        {/* Links centrados - ocultos en mobile */}
        <ul className="hidden md:flex gap-8 text-black font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-green-700 transition-colors duration-200"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/nuestra-mision"
              className="hover:text-green-700 transition-colors duration-200"
            >
              Nuestra Misión
            </Link>
          </li>
          <li>
            <Link
              to="/mascotas"
              className="hover:text-green-700 transition-colors duration-200"
            >
              Mascotas
            </Link>
          </li>
          <li>
            <Link
              to="/como-adoptar"
              className="hover:text-green-700 transition-colors duration-200"
            >
              Cómo Adoptar
            </Link>
          </li>
        </ul>

        {/* Login o avatar */}
        <div className="hidden md:flex items-center space-x-4">
          {!user ? (
            <button
              onClick={() => navigate("/login")}
              className="
                bg-gradient-to-tr from-[#22231e] via-[#b09b66] to-[#22231e]
                text-white font-semibold px-5 py-2 rounded-full text-sm
                shadow-[inset_0_-4px_8px_rgba(255,255,255,0.3),0_8px_20px_rgba(0,0,0,0.4)]
                hover:scale-105 hover:shadow-[inset_0_-2px_6px_rgba(255,255,255,0.5),0_10px_25px_rgba(0,0,0,0.5)]
                transition-all duration-300 ease-in-out cursor-pointer
              "
            >
              Iniciar sesión
            </button>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="focus:outline-none"
              >
                <img
                  src={user.photo_url}
                  alt="avatar"
                  className="w-9 h-9 rounded-full border border-gray-300 object-cover cursor-pointer"
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 shadow-lg rounded-md bg-green-800/90 backdrop-blur-sm z-50">
                  <div className="px-4 py-3 border-b border-green-600/50">
                    <p className="text-sm font-medium text-white">
                      {user.name} {user.lastName}
                    </p>
                    <p className="text-sm text-green-200">{user.email}</p>
                  </div>
                  <ul className="py-1">
                    <li>
                      <Link
                        to="/perfil"
                        className="block px-4 py-2 text-sm hover:bg-green-700 text-green-100"
                      >
                        Mi perfil
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-300 hover:bg-[#b09b66] cursor-pointer"
                      >
                        Cerrar sesión
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Botón hamburguesa mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Menú mobile */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-2 text-white font-medium">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/nuestra-mision" onClick={() => setMenuOpen(false)}>
                Nuestra Misión
              </Link>
            </li>
            <li>
              <Link to="/como-adoptar" onClick={() => setMenuOpen(false)}>
                Cómo Adoptar
              </Link>
            </li>
            {!user ? (
              <li>
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    navigate("/login");
                  }}
                  className="text-left w-full px-2 py-2 bg-green-600/80 text-white rounded-full hover:bg-green-700"
                >
                  Iniciar sesión
                </button>
              </li>
            ) : (
              <>
                <li className="flex items-center gap-2 mt-2">
                  <img
                    src={user.photo_url}
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{user.name}</span>
                </li>
                <li>
                  <Link
                    to="/perfil"
                    onClick={() => setMenuOpen(false)}
                    className="block py-2"
                  >
                    Mi perfil
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-left w-full px-2 py-2 text-red-300 hover:bg-green-700"
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
