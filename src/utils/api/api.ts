import { ProvinceAPIResponse } from ".";
import axiosWithConfig from "../axiosWithConfig";

// get province test
export const getProvince = async (): Promise<ProvinceAPIResponse> => {
  try {
    const response = await axiosWithConfig.get<ProvinceAPIResponse>(
      "/province"
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message);
  }
};
