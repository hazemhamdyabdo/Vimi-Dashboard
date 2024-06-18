import axios from 'axios';
import router from '@/router';
const axiosIns = axios.create({
  baseURL: 'https://techify-001-site1.htempurl.com/api/v1/',
  // timeout: 2000,
  headers: {
    'x-api-key': 'x5b9j8p2qRz3vdK1st7yf4ul6wa0ezcv',
  },
});

axiosIns.interceptors.request.use((config) => {
  // Retrieve token from localStorage
  const token = localStorage.getItem('accessToken');

  // If token is found
  if (token) {
    // Get request headers and if headers is undefined assign blank object
    config.headers = config.headers || {};

    // Set authorization header
    // ℹ️ JSON.parse will convert token to string
    config.headers.Authorization = token ? `Bearer ${JSON.parse(token)}` : '';
  }

  // Return modified config
  return config;
});

axiosIns.interceptors.response.use(
  (response) => {
    // If the response is successful (status code 2xx), return it as-is
    return response;
  },
  (error) => {
    // If the response has a 401 status code, handle the unauthorized request
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      router.push('/');
      window.location.reload();
    }

    // For other errors, reject the promise and pass the error along
    return Promise.reject(error);
  }
);
export default axiosIns;
