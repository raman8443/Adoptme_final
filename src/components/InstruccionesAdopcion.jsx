const InstruccionesAdopcion = () => {
  return (
    <section className="py-12 bg-green-50 text-green-900 mt-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          ¿Cómo adoptar una mascota?
        </h2>
        
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-2xl font-semibold mb-2">1. Explora nuestras publicaciones</h3>
            <p>
              Revisa las mascotas disponibles en la sección <strong>“Mascotas”</strong>. 
              Puedes ver fotos, leer descripciones y conocer su historia.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-2xl font-semibold mb-2">2. Lee los requisitos</h3>
            <p>
              Para garantizar una adopción responsable, pedimos:
              <ul className="list-disc list-inside mt-2">
                <li>Ser mayor de edad y contar con Documento vigente.</li>
                <li>Firmar un compromiso de tenencia responsable.</li>
                <li>Permitir visitas de seguimiento si es necesario.</li>
                <li>Si ya tienes todo Claro, procede a Crear tu Cuenta.</li>
                 <li>Puedes contactarnos si lo prefieres y nosotros gestionamos tu solicitud.</li>
                  <li>También puedes comenzar el proceso directamente desde el Sitio.</li>
              </ul>
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-2xl font-semibold mb-2">3. Contáctanos</h3>
            <p>
              Una vez encuentres la mascota ideal, envíanos un mensaje o inicia el proceso desde el enlace
              que encontrarás junto a cada publicación.
            </p>
          </div>

          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-xl mt-8">
            <h3 className="text-xl font-bold mb-1">⚠ Importante</h3>
            <p>
              No aceptamos entregas de mascotas con hogar, ni casos donde el motivo sea su mala conducta.
              Adoptar es un compromiso de por vida: asegúrate de estar listo para asumirlo con amor y responsabilidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstruccionesAdopcion;
