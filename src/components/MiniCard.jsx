const MiniCard = ({ pet }) => {
  const statusColors = {
    publicado: "bg-green-400",
    reservado: "bg-yellow-400",
    adoptado: "bg-blue-400",
  };

  // Por si `status` viene en otro formato (ej: mayúsculas o nulo)
  const statusKey = pet.status?.toLowerCase() || "inactivo";
  const bgColor = statusColors[statusKey] || "bg-slate-400";

  return (
    <div className="border rounded shadow p-3 md:w-[360px]">
      <img
        src={pet.photo_url}
        alt={pet.name}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <div className="flex">
        <div className="flex-1">
          <h3 className="font-bold text-lg">{pet.name}</h3>
          <p className="text-sm text-gray-600">
            {pet.breed} - {pet.age} año(s)
          </p>
        </div>
        <div className="justify-center items-center flex flex-col">
          <p className={`text-sm text-white px-2 py-0.5 rounded ${bgColor}`}>
            {pet.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
