import Header from "../components/Header";
import Galeria from "../components/Galeria";
import "../components/InicioPages.css"

const InicioPages = () => {
  return (
    <>
     <Header></Header> 


      
     <section class="saludo  saludo-inicio"> 
         <div class="contenedor"> 
             <h1 class="titulo-principal"> </h1> 
            
              <img  src="/public/adoptme.png" className="logo" alt=""   />
           
           
           
           
         </div> 
     </section>

     <section class="banner" id="banner">
    <div class="contenido1-seccion">
        <h2 class="titulo-seccion">Estas Buscando Tu Mascota Ideal?</h2>
      
    </div>
                 
</section>
     
     
     
     
     
 


















  <Galeria></Galeria>
    
    </>
  );
};

export default InicioPages;
