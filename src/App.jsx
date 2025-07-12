import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import PrivateLayout from "./layouts/PrivateLayouts";
import PublicRoute from "./components/PublicRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import InicioPages from "./pages/InicioPages";
import Mision from "./pages/Mision";
import ComoAdoptar from "./pages/ComoAdoptar";
import Header from "./components/Header";
import PetDetailPage from "./pages/PetDetail";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/Footer";
import Mascotas from "./pages/Mascotas";

function App() {
  const { loading } = useAuth();

  if (loading) return null; // o un spinner si querés

  return (
    <>
      <Header />
      <Routes>
        {/* Rutas públicas */}
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

        {/* Rutas públicas para todos */}
        <Route path="/" element={<InicioPages />} />
        <Route path="/nuestra-mision" element={<Mision />} />
        <Route path="/como-adoptar" element={<ComoAdoptar />} />
        <Route path="/mascotas" element={<Mascotas />} />
        <Route path="/mascota/:id" element={<PetDetailPage />} />

        {/* Rutas privadas */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <PrivateLayout />
            </PrivateRoute>
          }
        >
          <Route path="perfil" element={<ProfilePage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
