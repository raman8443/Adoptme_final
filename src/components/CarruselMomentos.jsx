import "../components/CarruselMomentos.css";

const CarruselMomentos = () => {
  const momentos = [
    {
      id: 1,
      src: "/mascotaAdoptada1.jpg",
      alt: "Mascota jugando en el parque",
    },
    { id: 2, src: "/mascotaAdoptada2.jpg", alt: "Perrito durmiendo feliz" },
    { id: 3, src: "/mascotaAdoptada3.jpg", alt: "Gatito con su nuevo dueño" },
    { id: 4, src: "/mascotaAdoptada4.jpeg", alt: "Perros corriendo juntos" },
    { id: 5, src: "/mascotaAdoptada5.jpg", alt: "Perros corriendo juntos" },
    { id: 6, src: "/mascotaAdoptada6.jpg", alt: "Perros corriendo juntos" },
  ];

  const duplicatedMomentos = [...momentos, ...momentos];

  return (
    <section className="py-12 bg-green-100 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
        Momentos felices con sus nuevas familias
      </h2>
      <div className="relative w-full">
        <div className="flex animate-carousel gap-4 w-max">
          {duplicatedMomentos.map((momento, index) => (
            <div
              key={index}
              className="min-w-[300px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={momento.src}
                alt={momento.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarruselMomentos;
