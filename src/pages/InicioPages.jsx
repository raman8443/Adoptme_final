import Galeria from "../components/Galeria";
import "../components/InicioPages.css";
import PostList from "../components/PostList";

const InicioPages = () => {
  return (
    <>
      <section class="saludo  saludo-inicio">
        <div class="contenedor">
          <h1 class="titulo-principal"> </h1>
          <img src="/public/adoptme.png" className="logo" alt="" />
        </div>
      </section>

      <section class="banner" id="banner">
        <div class="contenido1-seccion">
          <h2 class="titulo-seccion">Estas Buscando Tu Mascota Ideal?</h2>
        </div>
      </section>

      <section className="min-h-screen pt-4">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Mascotas en adopción
        </h2>
        <PostList />
      </section>

      <Galeria></Galeria>
    </>
  );
};

export default InicioPages;
