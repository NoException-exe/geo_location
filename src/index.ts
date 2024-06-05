/**
 * Main entry point of the application.
 *
 * Initializes Fastify and registers the routes.
 * Starts the server and logs the port.
 */

// Import fastify, the web framework
import fastify from "fastify";

// Import the router
import { Routers } from "./router/api.router";

// Create a new instance of Fastify
const app = fastify({
  logger: false,
});

/**
 * Async IIFE (Immediately Invoked Function Expression)
 *
 * This function is immediately invoked after it's defined.
 * It's used to contain all the code, so that the variables
 * defined in the function are not global.
 */
(async () => {
  // Define the server port
  const SERVER_PORT = 3000;

  // Register the routes with the prefix "/v1"
  await app.register(Routers, { prefix: "/v1" });

  // Start the server
  await app.listen({ port: SERVER_PORT, host: "localhost" });

  // Log the server port
  console.log("Server Running On Port:", SERVER_PORT);
})();
