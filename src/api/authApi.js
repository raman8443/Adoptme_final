import { API_BASE_URL } from "./apiConfig";

export const loginUser = async ({ email, password }) => {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Error al iniciar sesión");

  return data; // { message, token, user, refreshToken }
};

export const registerUser = async (formData) => {
  const res = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    body: formData,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Error al registrarse");
  return data; // también podés devolver token y user si querés loguear automáticamente
};

export const validateToken = async (token) => {
  const res = await fetch(`${API_BASE_URL}/auth/validate-token`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) return { valid: false };

  return res.json();
};
