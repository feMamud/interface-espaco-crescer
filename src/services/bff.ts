import api from "../api/axiosConfig";

export const getDashboardData = async () => {
  const response = await api.get("/bff/resumo");
  return response.data;
};
