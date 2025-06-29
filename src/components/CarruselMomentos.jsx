const CarruselMomentos = () => {
  const momentos = [
    { id: 1, src: "/public/mascotaAdoptada1.jpeg", alt: "Mascota jugando en el parque" },
    { id: 2, src: "/public/mascotaAdoptada2.jpeg", alt: "Perrito durmiendo feliz" },
    { id: 3, src: "/public/mascotaAdoptada3.jpeg", alt: "Gatito con su nuevo dueño" },
    { id: 4, src: "/public/mascotaAdoptada4.jpeg", alt: "Perros corriendo juntos" },
  ];

  return (
    <section className="py-12 bg-green-100">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
        Momentos felices con sus nuevas familias
      </h2>
      <div className="flex overflow-x-auto space-x-4 px-4">
        {momentos.map((momento) => (
          <div
            key={momento.id}
            className="min-w-[300px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg w-60"
          >
            <img
              src={momento.src}
              alt={momento.alt}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300  "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarruselMomentos;

























































