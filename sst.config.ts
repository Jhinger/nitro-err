/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "testapp",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const app = new sst.aws.SolidStart("TestSolidStart");

    return {
      assets: app.nodes.assets?.name,
      cdn: app.nodes.cdn?.url,
      server: app.nodes.server?.url
    }
  },
});
