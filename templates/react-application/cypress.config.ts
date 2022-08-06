import { defineConfig } from "cypress";

// eslint-disable-next-line import/no-default-export -- cypress requires default export
export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8080",
  },
  includeShadowDom: true,
  video: false,
});
