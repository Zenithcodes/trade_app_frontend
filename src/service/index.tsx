import Axios from 'axios';
import {API_URL} from '@env'
const axiosInstance = Axios.create({
    baseURL: API_URL,
    headers: {
    'Content-Type': 'application/json',
    }
}) 

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = ''
        const auth = token ? `Bearer ${token}` : "";
        config.headers["Authorization"] = auth;
        return config;
    },
    (error) => error
)
export default axiosInstance;