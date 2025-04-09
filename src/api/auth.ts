import axios from 'axios';
import api from './axiosConfig';

export async function login(email: string, password: string) {
  try {
    const response = await api.post('/auth/login', { email, password });
    console.log('Login bem-sucedido!');
    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data?.message || error.message);
    } else {
      console.error('Erro inesperado:', error);
    }
    return false;
  }
}

export async function getProfile() {
  try {
    const response = await api.get('/auth/me');
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro ao buscar perfil:', error.response?.data?.message || error.message);
    } else {
      console.error('Erro inesperado ao buscar perfil:', error);
    }
    return null;
  }
}

export async function logout() {
  try {
    await api.post('/auth/logout');
    return true;
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    return false;
  }
}
