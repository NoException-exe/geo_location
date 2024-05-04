import * as fs from "fs/promises";
import * as path from "path";
import { CityResponse, Reader } from "maxmind";
import { ApiResponse } from "src/type/api.type";

export class GeoLocationLite {
  private readonly DB_FILE_PATH = path.join(__dirname, "GeoLite2-City.mmdb");

  constructor(private readonly ip: string) {}

  public async getIp(): Promise<ApiResponse> {
    const buffer = await fs.readFile(this.DB_FILE_PATH);
    const lookup = new Reader<CityResponse>(buffer);
    const results = lookup.get(this.ip);

    if (!results) {
      return { success: false };
    }

    const subdivisions = results.subdivisions;
    const firstSubdivision = subdivisions && subdivisions[0];

    return {
      success: true,
      ip: this.ip,
      country_code: results?.country?.iso_code,
      country_name: results?.country?.names?.en,
      region_code: firstSubdivision?.iso_code,
      region_name: firstSubdivision?.names?.en,
      city: results?.city?.names?.en,
      zip_code: results?.postal?.code,
      time_zone: results?.location?.time_zone,
      latitude: results?.location?.latitude,
      longitude: results?.location?.longitude,
    };
  }
}
