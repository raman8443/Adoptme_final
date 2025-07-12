import { createContext, useContext, useState, useEffect } from "react";
import { validateToken } from "../api/authApi";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const savedUser = JSON.parse(localStorage.getItem("user"));
      const savedToken = localStorage.getItem("token");

      if (savedUser && savedToken) {
        try {
          const { valid, user: validatedUser } = await validateToken(
            savedToken
          );

          if (valid) {
            setUser({ ...savedUser, ...validatedUser }); // en caso de querer sobreescribir con el user del backend
            setToken(savedToken);
          } else {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
          }
        } catch (err) {
          console.error("Error validando el token:", err);
          localStorage.removeItem("user");
          localStorage.removeItem("token");
        }
      }

      setLoading(false);
    };

    initAuth();
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    setToken(token);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
