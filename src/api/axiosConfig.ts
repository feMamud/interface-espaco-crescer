// axiosConfig.ts
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // ✅ necessário para enviar cookies automaticamente
});

// Interceptor de resposta para erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message;

    // ❌ NÃO redirecionar automaticamente para /login aqui
    if (status === 401) {
      console.warn("Usuário não autenticado:", message);
    }

    if (status === 400 && message) {
      alert(message);
    }

    return Promise.reject(error);
  }
);

export default api;
