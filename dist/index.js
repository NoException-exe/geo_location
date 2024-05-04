"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const api_router_1 = require("./router/api.router");
const app = (0, fastify_1.default)({
    logger: true,
});
(async () => {
    const SERVER_PORT = 3000;
    await app.register(api_router_1.Routers, { prefix: "api/v1" });
    await app.listen({ port: SERVER_PORT, host: "localhost" });
    console.log("Server Running On Port:", SERVER_PORT);
})();
//# sourceMappingURL=index.js.map