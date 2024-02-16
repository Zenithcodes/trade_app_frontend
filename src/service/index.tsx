import Axios from 'axios';

const axiosInstance = Axios.create({
    baseURL: '',
    headers: {}
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