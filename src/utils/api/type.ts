import { Query, RajaOngkirResponse, Status } from "../types";

export interface Province {
  province_id: string;
  province: string;
}

export interface City extends Province {
  city_id: string;
  type: string;
  city_name: string;
  postal_code: string;
}

// Province Response Type
export interface ProvinceResponse {
  query: Query;
  status: Status;
  results: Province;
}

// City Response Type
export interface CityResponse {
  query: Query;
  status: Status;
  results: City;
}

// Cost Response Type
export interface CostResponse {
  query: Query;
  status: Status;
  origin_details: City;
  destination_details: City;
  results: {
    code: string;
    name: string;
    costs: {
      service: string;
      description: string;
      cost: {
        value: number;
        etd: string;
        note: string;
      }[];
    }[];
  }[];
}

// Specific API Response Types
export type ProvinceAPIResponse =
  RajaOngkirResponse<ProvinceResponse>;
export type CityAPIResponse = RajaOngkirResponse<CityResponse>;
export type CostAPIResponse = RajaOngkirResponse<CostResponse>;
