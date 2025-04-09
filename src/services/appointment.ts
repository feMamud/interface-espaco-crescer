// src/services/appointment.ts
import api from '../api/axiosConfig';

export const getAppointments = async () => {
  const response = await api.get('/appointments');
  return response.data;
};

export const getAppointmentById = async (id: number) => {
  const response = await api.get(`/appointments/${id}`);
  return response.data;
};

export const createAppointment = async (data: {
  date: string;
  time: string;
  dayOfWeek: string;
  clientId?: number;
  patientId?: number;
}) => {
  const response = await api.post('/appointments', data);
  return response.data;
};

export const updateAppointment = async (
  id: number,
  data: {
    date?: string;
    time?: string;
    dayOfWeek?: string;
    clientId?: number;
    patientId?: number;
  }
) => {
  const response = await api.put(`/appointments/${id}`, data);
  return response.data;
};

export const deleteAppointment = async (id: number) => {
  const response = await api.delete(`/appointments/${id}`);
  return response.data;
};
