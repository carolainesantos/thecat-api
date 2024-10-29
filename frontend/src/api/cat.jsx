import api from "./api";

export const getCats = async () => {
  const response = await api.get("/api/v1/cat");
  return response.data;
};

export const getCatById = async (id) => {
  const response = await api.get(`/api/v1/cat/${id}`);
  return response.data;
};

export const createCat = async (cat) => {
  const response = await api.post("/api/v1/cat", cat);
  return response.data;
};

export const updateCat = async (id, cat) => {
  const response = await api.put(`/api/v1/cat/${id}`, cat);
  return response.data;
};

export const deleteCat = async (id) => {
  return api.delete(`/api/v1/cat/${id}`);
};
