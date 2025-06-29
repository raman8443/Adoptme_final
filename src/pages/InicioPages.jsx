import "../components/InicioPages.css";
import PetSearch from "../components/PetSearch";
import PostList from "../components/PostList";

const InicioPages = () => {
  return (
    <>
      {/*
      <section className="">
        <div className="contenedor">
          <img src="/public/adoptme.png" className="logo" alt="" />
        </div>
      </section>
      */}
      <section
        id="banner"
        className="text-center text-white py-52 md:py-60 lg:py-72 bg-fixed bg-[45%] bg-cover relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/vision.jpg')",
        }}
      >
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#f5deb3]">
            ¿Estás buscando tu mascota ideal?
          </h2>
        </div>
      </section>

      <section className="min-h-screen pt-4">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Mascotas en adopción
        </h2>
        <PetSearch />
        <PostList />
      </section>
    </>
  );
};

export default InicioPages;
