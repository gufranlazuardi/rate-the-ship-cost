import { CourierResult, LocationDetails } from "../api/type";

export type Response<T = any> = {
  rajaongkir: T;
};

export interface RajaOngkirResponse {
  query: {
    origin: string;
    destination: string;
    weight: number;
    courier: string;
  };
  status: {
    code: number;
    description: string;
  };
  origin_details: LocationDetails;
  destination_details: LocationDetails;
  results: CourierResult[];
}
