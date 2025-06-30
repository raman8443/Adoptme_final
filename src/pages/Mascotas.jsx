import PostList from "../components/PostList"

const Mascotas = () => {
  return (
  <>
   <section className="min-h-screen pt-4 bg-white/40 backdrop-blur-md border border-white/30 rounded-xl mx-4 my-6 p-4  mt-20">
   <h2 className="text-3xl font-bold text-center text-black mb-6">
     Mascotas en adopción
   </h2>
   
   <PostList />
 </section>
  </>

  )
}

export default Mascotas