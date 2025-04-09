import api from './axiosConfig';
import axios from 'axios';

export async function registerUser(email: string, password: string) {
  try {
    const response = await api.post('/users/register', { email, password });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao registrar usuário:', error.response?.data?.message || error.message);
    } else if (error instanceof Error) {
      console.error('Erro ao registrar usuário:', error.message);
    } else {
      console.error('Erro desconhecido ao registrar usuário');
    }
    return null;
  }
}

export async function getUsers() {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao buscar usuários:', error.response?.data?.message || error.message);
    } else if (error instanceof Error) {
      console.error('Erro ao buscar usuários:', error.message);
    } else {
      console.error('Erro desconhecido ao buscar usuários');
    }
    return null;
  }
}
