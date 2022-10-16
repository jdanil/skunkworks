import fastify from "fastify";

/* eslint-disable @typescript-eslint/no-magic-numbers -- used as default values for environment variables */
/* eslint-disable node/no-process-env -- check `process.env` to detect environment variables */

const PORT = process.env.PORT ? Number.parseInt(process.env.PORT, 10) : 3000;

/* eslint-enable @typescript-eslint/no-magic-numbers -- re-enable */
/* eslint-enable node/no-process-env -- re-enable */

const instance = fastify({ logger: true });

instance.get("/", () => ({ status: "OK" }));

try {
  await instance.listen({ port: PORT });
} catch (error) {
  instance.log.error(error);
  throw error as Error;
}
