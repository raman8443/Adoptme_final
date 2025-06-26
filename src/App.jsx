import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PrivateLayout from "./layouts/PrivateLayouts";
import PublicRoute from "./components/PublicRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import InicioPages from "./pages/InicioPages";
import Mision from "./pages/Mision";
import ComoAdoptar from "./pages/ComoAdoptar";
import DarAdopcion from "./pages/DarAdopcion";
import Header from "./components/Header";
import PetDetailPage from "./pages/PetDetail";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <Header /> {/* Esto se muestra siempre */}
      <Routes>
        {/* Rutas públicas (No deja ingresar a paginas una vez logueado)*/}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />

        {/* Rutas accesibles para todos */}
        <Route path="/" element={<InicioPages />} />
        <Route path="/nuestra-mision" element={<Mision />} />
        <Route path="/como-adoptar" element={<ComoAdoptar />} />

        {/* Rutas protegidas agrupadas (solo accesibles si el usuario está autenticado) */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <PrivateLayout />
            </PrivateRoute>
          }
        >
          {/* Podés agregar más rutas privadas acá abajo*/}
          <Route path="perfil" element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
