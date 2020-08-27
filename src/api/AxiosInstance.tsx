import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_DOMAIN,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default AxiosInstance;