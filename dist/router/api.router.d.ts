import { FastifyInstance, FastifyPluginOptions } from "fastify";
declare const Routers: (fastify: FastifyInstance, options: FastifyPluginOptions, done: (err?: Error) => void) => void;
export { Routers };
