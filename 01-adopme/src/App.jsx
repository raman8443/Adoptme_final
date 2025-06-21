import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import InicioPages from "./pages/InicioPages";
import Mision from "./pages/Mision";
import ComoAdoptar from "./pages/ComoAdoptar";
import DarAdopcion from "./pages/DarAdopcion";


function App() {  

  return (

   <Routes>
      <Route path="/" element ={<InicioPages />} />
      <Route path="/Mision" element ={<Mision />} />
      <Route path="/ComoAdoptar" element ={<ComoAdoptar/>} />
      <Route path="/DarAdopcion" element ={<DarAdopcion />} />
      
   </Routes>
 
   
    
  );
}

export default App
