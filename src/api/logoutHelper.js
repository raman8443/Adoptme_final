export const logoutUser = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  window.location.href = "/login"; // o donde vayas en tu app
};
