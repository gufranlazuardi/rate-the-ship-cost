import axios from 'axios';

// get province test
export const getProvince = async () => {
  try {
    const response = axios.get('https://api.rajaongkir.com/starter');
    console.log(response);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message);
  }
};
