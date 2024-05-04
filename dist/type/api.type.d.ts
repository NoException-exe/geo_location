export type ApiResponse = {
    success: boolean;
    country_code: number;
    country_name: string;
    region_code: number;
    region_name: string;
    city: string;
    isp: string;
    zip_code: number;
    time_zone: string;
    latitude: number;
    longitude: number;
};
export type ApiBody = {
    ip: string;
};
