import * as fs from "fs/promises";
import * as path from "path";

import { CityResponse, Reader } from "maxmind";
import { ApiResponseDto } from "../../src/dtos/api.dto";

export class GeoLocationLite {
  private readonly DB_FILE_PATH = path.join(__dirname, "GeoLite2-City.mmdb");

  constructor(private readonly ip: string) {}

  /**
   * Get the geolocation information for the given IP.
   *
   * @returns {Promise<ApiResponseDto>}
   * The promise resolves to the API response.
   * If the IP is not found, the success field is set to false.
   * If the IP is found, the success field is set to true and the other fields
   * contain the geolocation information.
   */
  public async getIp(): Promise<ApiResponseDto> {
    // Read the database file
    const buffer = await fs.readFile(this.DB_FILE_PATH);

    // Create a reader object for the database
    const lookup = new Reader<CityResponse>(buffer);

    // Get the geolocation information for the given IP
    const results = lookup.get(this.ip);

    if (!results) {
      return { success: false };
    }

    // Get the first subdivision from the results
    const subdivisions = results.subdivisions;
    const firstSubdivision = subdivisions && subdivisions[0];

    // Create the API response object
    return {
      success: true,
      ip: this.ip,
      country_code: results?.country?.iso_code || null,
      country_name: results?.country?.names?.en || null,
      region_code: firstSubdivision?.iso_code || null,
      region_name: firstSubdivision?.names?.en || null,
      city: results?.city?.names?.en || null,
      zip_code: results?.postal?.code || null,
      time_zone: results?.location?.time_zone || null,
      latitude: results?.location?.latitude || null,
      longitude: results?.location?.longitude || null,
    };
  }
}
