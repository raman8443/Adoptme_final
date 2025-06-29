import React from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="
      bg-gradient-to-r from-[#b09b66] via-[#777d24] to-[#b09b66]
      text-green-900 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]
    ">
      <div className="max-w-screen-xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo + slogan */}
        <div className="flex items-center gap-3">
          <img src="/adoptme-logo-2.webp" alt="Logo" className="h-12" />
          <div>
            <span className="text-2xl font-bold">
              Adopt<span className="text-green-700">Me</span>
            </span>
            <p className="text-[white] text-sm">Dando un hogar a quienes más lo necesitan </p>
          </div>
        </div>

        {/* Enlaces lineales */}
        <div className="flex flex-wrap gap-6">
          <Link to="/" className="hover:text-[white] transition">Inicio</Link>
          <Link to="/nuestra-mision" className="hover:text-[white] transition">Nuestra Misión</Link>
          <Link to="/como-adoptar" className="hover:text-[white] transition">Cómo Adoptar</Link>
          <Link to="/perfil" className="hover:text-[white] transition">Mi Perfil</Link>
        </div>
      </div>

      <div className="border-t border-green-400 py-3 text-center text-green-800 text-sm">
        © {new Date().getFullYear()} AdoptMe. Hecho por amantes de los animales.
      </div>
    </footer>
  );
};

export default Footer;





























































































































