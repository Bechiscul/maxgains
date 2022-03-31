// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/static",
    public: "/",
  },
  routes: [
    {
      match: "routes",
      src: ".*",
      dest: "/index.html",
    },
  ],
  plugins: [
    "inline-svg",
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-postcss",
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  buildOptions: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: 'import {h, Fragment} from "preact";',
  },
  optimize: {
    bundle: true,
    minify: true,
    target: "es2018",
  },
};
