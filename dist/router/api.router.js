"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const Routers = (fastify, options, done) => {
    fastify.route({
        method: "POST",
        url: "/",
        handler: async (request, reply) => {
            reply.send({ hello: "world" });
        },
    });
    done();
};
exports.Routers = Routers;
//# sourceMappingURL=api.router.js.map