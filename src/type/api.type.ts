export type ApiResponse = {
  success: boolean;
  ip?: string;
  country_code?: string;
  country_name?: string;
  region_code?: string;
  region_name?: string;
  city?: string;
  isp?: string;
  zip_code?: string;
  time_zone?: string;
  latitude?: number;
  longitude?: number;
};

export type ApiBody = {
  ip: string;
};
