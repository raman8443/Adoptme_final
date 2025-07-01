import AllPosts from "../components/AllPosts";

const Mascotas = () => {
  return (
    <>
      <section className="min-h-screen pt-4 mx-4 my-6 p-4  mt-20">
        <h2 className="text-3xl font-bold text-center text-black mb-6">
          Mascotas en adopción
        </h2>
        <AllPosts />
      </section>
    </>
  );
};

export default Mascotas;
