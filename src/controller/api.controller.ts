import { FastifyReply, FastifyRequest } from "fastify";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ApiBodyDto, ApiResponseDto } from "../dtos/api.dto";
import { ApiService } from "../service/api.service";

export class ApiController {
  /**
   * This method is the main handler for the API route.
   * It receives a request and a reply from Fastify.
   *
   * It first converts the request body to a strongly typed object.
   * Then it validates the object.
   * If the object is not valid, it returns a 400 status and the errors.
   *
   * If the object is valid, it calls the ApiService to execute the request.
   * Then it sends the response.
   *
   * @param {FastifyRequest} request - The request from Fastify.
   * @param {FastifyReply} reply - The reply from Fastify.
   * @returns {Promise<ApiResponseDto>}
   */
  public async handle(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<ApiResponseDto> {
    // Convert the request body to a strongly typed object.
    const data: ApiBodyDto = plainToClass(ApiBodyDto, request.body);

    // Validate the object.
    const errors = await validate(data);

    // If the object is not valid, return a 400 status and the errors.
    if (errors.length > 0) {
      return reply.status(400).send({ success: false, errors });
    }

    // Get the IP from the data.
    const { ip } = data;

    // Create a new instance of ApiService.
    const apiService = new ApiService();

    // Execute the request.
    const response = await apiService.execute({ ip });

    // Return the response.
    return reply.send(response);
  }
}
