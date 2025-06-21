import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <h1 className="title">AdoptMe</h1>
      <nav>
        <ul className="link-list">
          <li>
            <Link className="link" to="/">Inicio</Link>
          </li>
          <li>
            <Link className="link" to="/Mision">Nuestra Misión</Link>
          </li>
          <li>
            <Link className="link" to="/ComoAdoptar">Como Adoptar?</Link>
          </li>
          <li>
            <Link className="link" to="/DarAdopcion">Dar en Adopción</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
