export interface LocationDetails {
  city_id: string;
  province_id: string;
  province: string;
  type: string;
  city_name: string;
  postal_code: string;
}

export interface CourierResult {
  code: string;
  name: string;
  costs: CostDetails[];
}

export interface CostDetails {
  service: string;
  description: string;
  cost: Cost[];
}

export interface Cost {
  value: number;
  etd: string;
  note: string;
}
