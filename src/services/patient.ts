import api from '../api/axiosConfig';

const API_URL = '/patients'; // Apenas o endpoint, pois baseURL já está no axiosConfig

export const registerPatient = async (patientData: {
  name: string;
  birthDate: string;
  address: string;
  phone: string;
  emergencyContact: string;
  email?: string;
  gender: string;
}) => {
  const response = await api.post(API_URL, patientData);
  return response.data;
};

export const getPatients = async () => {
  const response = await api.get(API_URL);
  return response.data;
};

export const getPatientById = async (id: number) => {
  const response = await api.get(`${API_URL}/${id}`);
  return response.data;
};

export const updatePatient = async (
  id: number,
  patientData: {
    name?: string;
    birthDate?: string;
    address?: string;
    phone?: string;
    emergencyContact?: string;
    email?: string;
    gender?: string;
  }
) => {
  const response = await api.put(`${API_URL}/${id}`, patientData);
  return response.data;
};

export const deletePatient = async (id: number) => {
  const response = await api.delete(`${API_URL}/${id}`);
  return response.data;
};
