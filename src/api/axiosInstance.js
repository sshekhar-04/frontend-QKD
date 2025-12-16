import axios from 'axios';

// Vite automatically loads the correct VITE_API_BASE_URL based on the mode (dev or production)
const baseURL = import.meta.env.VITE_API_BASE_URL;

// Create the Axios instance
const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000, // 10 seconds timeout
  // If you need to send cookies/auth headers:
  // withCredentials: true, 
});

export default axiosInstance;