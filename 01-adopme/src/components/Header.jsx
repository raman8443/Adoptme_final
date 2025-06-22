// src/components/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#a7b137] border-b border-[#1F6533] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          <NavLink to="/">Adopt</NavLink>
          <NavLink to={"/"} className="text-[#1F6533]">
            <span className="text-[#1F6533]">Me</span>
          </NavLink>
        </h1>

        <nav>
          <ul className="flex gap-6 text-white font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#1F6533] font-semibold underline"
                    : "hover:text-[#1F6533]"
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Mision"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#1F6533] font-semibold underline"
                    : "hover:text-[#1F6533]"
                }
              >
                Nuestra Misión
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ComoAdoptar"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#1F6533] font-semibold underline"
                    : "hover:text-[#1F6533]"
                }
              >
                ¿Cómo Adoptar?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/DarAdopcion"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#1F6533] font-semibold underline"
                    : "hover:text-[#1F6533]"
                }
              >
                Dar en Adopción
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
