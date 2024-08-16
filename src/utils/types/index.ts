export interface RajaOngkirResponse<T = any> {
  rajaongkir: T;
}

export interface Query {
  id?: string;
  province?: string;
  origin?: string;
  destination?: string;
  weight?: number;
  courier?: string;
}

export interface Status {
  code: number;
  description: string;
}
