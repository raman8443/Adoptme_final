import "../components/QuienesSomos.css";

const QuienesSomos = () => {
  return (
    <div className="quienes-container max-w-6xl mx-auto px-4 py-12">
      <div className="banner-vibrante mb-10">
        💛 Juntos construimos un mundo mejor para nuestras mascotas
      </div>

      <h2 className="text-4xl font-bold text-center text-[#a77f1a] mb-6 animate-fade-up mt-20">
        Quiénes Somos
      </h2>
      <p className="text-center max-w-3xl mx-auto mb-12 text-lg animate-fade-up animation-delay-200">
        Somos un proyecto dedicado a rescatar, cuidar y encontrar un hogar responsable para animales en situación de calle.
        Más de 8 años construyendo una comunidad solidaria junto a voluntarios y amantes de los animales.
      </p>

      <div className="relative flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
        <div className="glass-box p-6 animate-fade-up">
          <h3 className="text-2xl font-semibold mb-4 text-[#1F6533]">Nuestro proyecto</h3>
          <p>
            Iniciado en 2015 por Ezequiel y Ramón, dos amigos unidos por el amor hacia los animales.
            Hoy contamos con más de 50 voluntarios activos y hemos rescatado más de 2000 mascotas.
          </p>
        </div>
        <div className="floating-img-container flex gap-6">
          <img src="/public/bulldog frances niño.jpg" alt="Mascota feliz" className="floating-img"/>
          <img src="/public/perrito durmiendo.jpeg" alt="Mascota adoptada" className="floating-img floating-delay"/>
        </div>
      </div>

      <h3 className="text-3xl font-bold text-center text-[#a77f1a] mb-8 animate-fade-up">
        Logros importantes & Aportes
      </h3>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="glass-box text-center p-6 animate-fade-up">
          <h4 className="text-xl font-semibold mb-2">+2000 Rescates</h4>
          <p>Hemos dado una segunda oportunidad a miles de peluditos.</p>
        </div>
        <div className="glass-box text-center p-6 animate-fade-up animation-delay-200">
          <h4 className="text-xl font-semibold mb-2">Conciencia social</h4>
          <p>Charlas en escuelas y barrios para fomentar la adopción responsable.</p>
        </div>
        <div className="glass-box text-center p-6 animate-fade-up animation-delay-400">
          <h4 className="text-xl font-semibold mb-2">Apoyo veterinario</h4>
          <p>Campañas de vacunación y castración gratuitas para comunidades vulnerables.</p>
        </div>
      </div>

      <h3 className="text-3xl font-bold text-center text-[#a77f1a] mb-8 animate-fade-up">
        Nuestros patrocinantes
      </h3>
      <div className="collage flex flex-wrap justify-center gap-6">
        <img src="/public/sponsor1.png" alt="Sponsor 1" className="collage-img animate-fade-up"/>
        <img src="/public/sponsor2.jpeg" alt="Sponsor 2" className="collage-img animate-fade-up animation-delay-200"/>
        <img src="/public/sponsor3.jpeg" alt="Sponsor 3" className="collage-img animate-fade-up animation-delay-400"/>
        <img src="/public/sponsor1.png" alt="Sponsor 4" className="collage-img animate-fade-up animation-delay-600"/>
      </div>
    </div>
  );
};

export default QuienesSomos;













































