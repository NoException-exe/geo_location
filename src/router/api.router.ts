import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { ApiController } from "../controller/api.controller";

const Routers = (
  fastify: FastifyInstance,
  options: FastifyPluginOptions,
  done: (err?: Error) => void
) => {
  fastify.route({
    method: "POST",
    url: "/json",
    handler: async (request: FastifyRequest, reply: FastifyReply) => {
      return await ApiController().handle(request, reply);
    },
  });

  done();
};

export { Routers };
