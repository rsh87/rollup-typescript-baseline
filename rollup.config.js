import typescript from "rollup-plugin-typescript2";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import copy from "rollup-plugin-copy";

export default {
  input: ["./src/main.ts"],
  output: {
    format: "iife",
    dir: "dist"
  },

  plugins: [
    copy({
      targets: [{ src: "src/index.html", dest: "dist" }],
      copyOnce: true
    }),
    typescript({ objectHashIgnoreUnknownHack: true }),
    postcss({ plugins: [postcssImport] }),
    serve({
      contentBase: "dist",
      open: true
    }),
    livereload({ watch: "dist" })
  ]
};
