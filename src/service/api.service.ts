import { GeoLocationLite } from "../../lib/GeoLite2/index";
import { ApiBodyDto, ApiResponseDto } from "../dtos/api.dto";

export class ApiService {
  /**
   * Executes the API request.
   *
   * @param {ApiBodyDto} params - The parameters for the API request.
   * @returns {Promise<ApiResponseDto>} - A promise that resolves to the API response.
   */
  public async execute({ ip }: ApiBodyDto): Promise<ApiResponseDto> {
    // Create a new instance of GeoLocationLite.
    const location = new GeoLocationLite(ip);

    // Get the IP information.
    const data = await location.getIp();

    // Return the data.
    return data;
  }
}
