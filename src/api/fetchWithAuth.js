import { logoutUser } from "./logoutHelper";

export const fetchWithAuth = async (url, options = {}, token) => {
  const res = await fetch(url, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (res.status === 401) {
    logoutUser();
    throw new Error("Sesión expirada. Volvé a iniciar sesión.");
  }

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Error en la petición");
  return data;
};
