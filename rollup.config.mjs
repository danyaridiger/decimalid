import { babel } from "@rollup/plugin-babel";
import dts from "rollup-plugin-dts";

export default [
  {
    input: "index.js",
    output: [
      {
        file: "dist/cjs.js",
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: "dist/mjs.js",
        format: "es",
        sourcemap: true,
      },
    ],
    plugins: [
      babel({
        exclude: ["./node_modules/**", "./qa/**"],
      }),
    ]
  },
  {
    input: "./types/index.d.ts",
    output: [
      {
        file: "dist/types/index.d.ts",
        format: "es",
        sourcemap: false,
      }
    ],
    plugins: [dts()],
  }
];