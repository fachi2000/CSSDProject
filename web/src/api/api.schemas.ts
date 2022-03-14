/**
 * Generated by orval v6.6.4 🍺
 * Do not edit manually.
 * api
 * OpenAPI spec version: 1.0
 */
export type PostApiAuthVerifyParams = { token?: string };

export type PostApiAuthRequestParams = { email?: string };

export interface WeatherForecast {
  id?: number;
  date?: string;
  temperatureC?: number;
  readonly temperatureF?: number;
  summary?: string | null;
}

export interface CreateAddressDto {
  line1?: string | null;
  line2?: string | null;
  line3?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  postcode?: string | null;
}

export interface CreateAccountDto {
  name?: string | null;
  email?: string | null;
  immediatePayment?: boolean;
  postalAddress?: CreateAddressDto;
}

