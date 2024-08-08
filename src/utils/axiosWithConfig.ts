import axios from "axios";

const axiosWithConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

axiosWithConfig.interceptors.request.use((axiosConfg) => {
  axiosConfg.headers[
    "Authorization"
  ] = `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`;
  return axiosConfg;
});

export default axiosWithConfig;
