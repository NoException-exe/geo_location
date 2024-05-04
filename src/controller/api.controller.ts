import { FastifyReply, FastifyRequest } from "fastify";
import { isIPv4, isIPv6 } from "net";
import { ApiService } from "../service/api.service";
import { ApiBody } from "src/type/api.type";
import { BadRequestError } from "../throw/api.throw";

export const ApiController = () => {
  return {
    handle: async (request: FastifyRequest, reply: FastifyReply) => {
      const { ip } = request.body as ApiBody;

      if (!ip) {
        throw new BadRequestError("Ip field is required");
      }

      if (!isIPv4(ip) && !isIPv6(ip)) {
        throw new BadRequestError("Invalid ip address");
      }

      const apiService = ApiService();
      const response = await apiService.execute({ ip });

      return reply.status(200).send(response);
    },
  };
};
