import { FastifyPluginCallback } from "fastify";

import fp from "fastify-plugin";

const statusRoute: FastifyPluginCallback = async (app, options, next) => {
  app.route({
    url: "/status",
    logLevel: "warn",
    method: ["GET", "HEAD"],
    handler: async (request, reply) => {
      return reply.send({ date: new Date(), works: true });
    },
  });
  next();
};

export default fp(statusRoute);
