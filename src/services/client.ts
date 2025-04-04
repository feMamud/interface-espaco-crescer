import axios from 'axios';

const API_URL = 'http://localhost:3000/clients';

// 🔹 Criar um cliente
export const registerClient = async (clientData: {
  name: string;
  birthDate: string;
  guardianName: string;
  phone: string;
  address: string;
  appointmentTime: string;
}) => {
  const response = await axios.post(`${API_URL}`, clientData);
  return response.data;
};

// 🔹 Listar todos os clientes
export const getClients = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

// 🔹 Buscar um cliente específico por ID
export const getClientById = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// 🔹 Atualizar um cliente
export const updateClient = async (id: number, clientData: {
  name?: string;
  birthDate?: string;
  guardianName?: string;
  phone?: string;
  address?: string;
  appointmentTime?: string;
}) => {
  const response = await axios.put(`${API_URL}/${id}`, clientData);
  return response.data;
};

// 🔹 Deletar um cliente
export const deleteClient = async (id: number) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
