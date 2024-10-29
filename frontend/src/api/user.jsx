import api from "./api";

// Montando o axios(fetch) pra requisitar pro backend
// Capturando a resposta pelo response e passando adiante
export const createUser = async (user) => {
  const response = await api.post("/api/v1/user", user);
  return response.data;
};

export const updateUser = async (user) => {
  const response = await api.put(`/api/v1/user`, user);
  return response.data;
};

export const getContext = async () => {
  const response = await api.get(`/api/v1/user/info`);
  return response.data;
};

export const deleteUser = async () => {
  return api.delete(`/api/v1/user/`);
};

export const getUserInfo = async () => {
  const response = await api.get(`/api/v1/user/info`);
  return response.data;
};

export const login = async (email, password) => {
  const body = { email, password };
  const response = await api.post("/api/v1/user/login", body);
  return response.data;
};

// ADMIN
export const createUserAdmin = async (user) => {
  const response = await api.post("/api/v1/user/admin", user);
  return response.data;
};

export const getAllUsers = async () => {
  const response = await api.get("/api/v1/user");
  return response.data;
};

export const getUserAdminById = async (id) => {
  const response = await api.get(`/api/v1/user/${id}`);
  return response.data;
};

export const updateUserAdmin = async (id, user) => {
  const response = await api.put(`/api/v1/user/${id}`, user);
  return response.data;
};

export const deleteUserAdmin = async (id) => {
  return api.delete(`/api/v1/user/${id}`);
};
