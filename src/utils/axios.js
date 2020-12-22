import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://5f3430949124200016e18826.mockapi.io/api",
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
