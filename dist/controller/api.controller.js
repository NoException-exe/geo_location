"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiController = () => {
    return {
        handle: (request, reply) => {
            const { ip } = request.body;
            if (!ip)
                return null;
        },
    };
};
//# sourceMappingURL=api.controller.js.map