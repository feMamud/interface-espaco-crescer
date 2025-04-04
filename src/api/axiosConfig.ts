import axios from 'axios';

// Criando uma instância do Axios
const api = axios.create({
  baseURL: 'http://localhost:3000', // Altere para a URL da sua API
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para adicionar o token automaticamente em todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
