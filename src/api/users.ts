import api from './axiosConfig';

export async function registerUser(email: string, password: string) {
  try {
    const response = await api.post('/users/register', { email, password });
    return response.data;
  } catch (error) {
    console.error('Erro ao registrar usuário:', error.response?.data?.message || error.message);
    return null;
  }
}

export async function getUsers() {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error.response?.data?.message || error.message);
    return null;
  }
}
