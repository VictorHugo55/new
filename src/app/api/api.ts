import axios from 'axios';

// Configuração da instância do Axios
const api = axios.create({
    baseURL: 'http://localhost:8080/', // Substitua pela URL real da API
    headers: {
        'Content-Type': 'application/json',
    },
});

// Função para login
export const loginUser = async (email: string, password: string) => {
    try {
        const response = await api.post('/api/auth/login', { email, password });
        return response.data; // Retorna o token ou dados do usuário
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erro ao fazer login.');
    }
};

// Função para registro
export const registerUser = async (name: string, email: string, password: string) => {
    try {
        const response = await api.post('/api/auth/register', { name, email, password });
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Erro ao registrar usuário.');
    }
};

export default api;
