import fastify from "fastify";

/* eslint-disable @typescript-eslint/no-magic-numbers -- used as default values for environment variables */
/* eslint-disable node/no-process-env -- check `process.env` to detect environment variables */

const PORT = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3000;

/* eslint-enable @typescript-eslint/no-magic-numbers -- re-enable */
/* eslint-enable node/no-process-env -- re-enable */

const server = fastify({ logger: true });

server.get("/", async (_request, reply) => {
  await reply.send({ status: "OK" });
});

server.listen({ port: PORT }, (error) => {
  if (error) {
    throw error;
  }
});
