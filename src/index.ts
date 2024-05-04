import fastify from "fastify";
import { Routers } from "./router/api.router";

const app = fastify({
  logger: false,
});

(async () => {
  const SERVER_PORT = 3000;

  await app.register(Routers, { prefix: "/v1" });
  await app.listen({ port: SERVER_PORT, host: "localhost" });

  console.log("Server Running On Port:", SERVER_PORT);
})();
