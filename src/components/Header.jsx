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
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#a7b137] border-b border-gray-200 shadow-sm border-b-[#1F6533]">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/adoptme-logo-2.webp" alt="avatar" className="h-12" />
          <span className="text-2xl font-bold text-white">
            Adopt<span className="text-[#1F6533]">Me</span>
          </span>
        </Link>

        {/* Links centrados - ocultos en mobile */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/nuestra-mision">Nuestra Misión</Link>
          </li>
          <li>
            <Link to="/como-adoptar">Cómo Adoptar</Link>
          </li>
        </ul>

        {/* Login o avatar - visible en desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {!user ? (
            <button
              onClick={() => navigate("/login")}
              className="bg-[#1F6533] text-white font-medium px-4 py-2 rounded-md text-sm hover:bg-[#175127] cursor-pointer transition"
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
                  className="w-9 h-9 rounded-full border border-gray-300 object-cover"
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 shadow-lg rounded-md bg-[#a7b137] z-50">
                  <div className="px-4 py-3 border-b border-gray-300">
                    <p className="text-sm font-medium text-white">
                      {user.name} {user.lastName}
                    </p>
                    <p className="text-sm text-gray-300">{user.email}</p>
                  </div>
                  <ul className="py-1">
                    <li>
                      <Link
                        to="/perfil"
                        className="block px-4 py-2 text-sm hover:bg-[#1F6533] text-gray-200"
                      >
                        Mi perfil
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-200 hover:bg-[#1F6533]"
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
          className="md:hidden text-gray-700 dark:text-white focus:outline-none"
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
          <ul className="flex flex-col gap-2 text-gray-700 dark:text-white font-medium">
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
                  className="text-left w-full px-2 py-2 bg-[#1F6533] text-white rounded hover:bg-indigo-500"
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
                    className="text-left w-full px-2 py-2 text-red-600 hover:bg-red-100 dark:text-red-400"
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
