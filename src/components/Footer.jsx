import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1F6533] text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold mb-2">Adopt<span className="text-[#a7b137]">Me</span></h4>
          <p className="text-sm text-gray-200">
            Juntos damos una segunda oportunidad a quienes más lo necesitan.
          </p>
        </div>

        <ul className="flex flex-col md:flex-row gap-4 text-sm">
          <li>
            <Link to="/" className="hover:text-[#a7b137]">Inicio</Link>
          </li>
          <li>
            <Link to="/nuestra-mision" className="hover:text-[#a7b137]">Nuestra Misión</Link>
          </li>
          <li>
            <Link to="/como-adoptar" className="hover:text-[#a7b137]">Cómo Adoptar</Link>
          </li>
        </ul>

        <div className="text-center md:text-right text-xs text-gray-300">
          © {new Date().getFullYear()} AdoptMe. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
