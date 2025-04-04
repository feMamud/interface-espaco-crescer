import api from './axiosConfig';

export async function login(email: string, password: string) {
  try {
    const response = await api.post('/auth/login', { email, password });

    const { access_token } = response.data;
    localStorage.setItem('token', access_token);

    console.log('Login bem-sucedido!');
    return access_token;
  } catch (error) {
    console.error('Erro ao fazer login:', error.response?.data?.message || error.message);
    return null;
  }
}

export async function getProfile() {
  try {
    const response = await api.get('/auth/me'); 
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar perfil:', error.response?.data?.message || error.message);
    return null;
  }
}

// Adicionando logout
export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userToken"); // Se precisar remover mais tokens
  console.log("Usuário deslogado!");
}
