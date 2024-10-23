import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/index", "src/client/index", "src/server/index"],
  declaration: true,
  sourcemap: true,
  name: "txivh-sdk-types",
  rollup: {
    emitCJS: true,
  },
});
