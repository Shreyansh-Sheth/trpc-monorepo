import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entryPoints: ["src/index.ts"],
  tsconfig: "tsconfig.json",
  clean: true,
  // dts: true,
  // bundle: true,
  dts: {
    // resolve: true,
    entry: "src/index.ts",
  },
  // experimentalDts: {
  //   entry: "src/index.ts",
  // },
  format: ["cjs"],

  ...options,
}));
