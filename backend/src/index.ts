import fastify, { FastifyInstance } from "fastify";

import fastifyBlipp from "fastify-blipp";
import { IncomingMessage, Server, ServerResponse } from "http";
import { AddressInfo } from "net";
import cryptoRandomString from "crypto-random-string";

import statusRoutes from "./modules/routes/status/index";

import { prisma } from "./db/prisma";

(async () => {
  try {
    await prisma.$connect();
    console.log("Database connection achieved 🙌");
  } catch (e) {
    console.error(e);
  }
})();

const app: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify();

app.register(fastifyBlipp);
app.register(statusRoutes);

app.get("/", (request, reply) => {
  reply.send({ message: "Twitch Noty Manager API" });
});

const start = async () => {
  try {
    await app.listen(8080, "0.0.0.0");
    const add = app.server.address() as AddressInfo;
    console.log(`Server listening on ${add.port}`);

    app.blipp();

    const user = await prisma.user.findFirst();

    if (!user) {
      const setupKey = process.env.SETUP_KEY || cryptoRandomString(50);
      console.log(`Your setup key is ${setupKey} 🔑`);
    } else {
      console.log("Welcome back! 😁");
    }
  } catch (err) {
    console.log(err);
    app.log.error(err);
    process.exit(1);
  }
};

process.on("uncaughtException", (error) => {
  console.error(error);
});

process.on("unhandledRejection", (error) => {
  console.error(error);
});

start();
