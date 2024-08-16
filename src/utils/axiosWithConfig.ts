import axios from "axios";

const axiosWithConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

axiosWithConfig.interceptors.request.use((config) => {
  if (process.env.NEXT_PUBLIC_API_KEY) {
    config.headers["key"] = process.env.NEXT_PUBLIC_API_KEY;
  }
  return config;
});

export default axiosWithConfig;
