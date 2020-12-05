import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: process.env.REQUEST_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default AxiosInstance;
