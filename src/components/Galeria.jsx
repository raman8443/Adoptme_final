import "./Galeria.css";
const Mascotas = [
  {
    id: 1,
    name: "gusto",
    size: "Grande",
    img: "",
  },
  {
    id: 2,
    name: "tacto",
    size: "Grande",
    img: "",
  },
  {
    id: 3,
    name: "olfato",
    size: "Grande",
    img: "",
  },
  {
    id: 4,
    name: "olfato",
    size: "Grande",
    img: "",
  },
  {
    id: 5,
    name: "olfato",
    size: "Grande",
    img: "",
  },
  {
    id: 5,
    name: "olfato",
    size: "Grande",
    img: "",
  },
];
const HTMLMascotas = Mascotas.map((mascota) => {
  return (
    <div key={mascota.id} className="fotos">
      <dir className="fotosinterno">
        <h2>{mascota.name}</h2>
        <h2>{mascota.size}</h2>
        <img src={mascota.img} alt="" />
      </dir>
    </div>
  );
});
const Galeria = () => {
  return <div>{HTMLMascotas}</div>;
};

export default Galeria;
