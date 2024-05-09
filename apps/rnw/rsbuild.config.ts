import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
// import { pluginBabel } from '@rsbuild/plugin-babel';
import path from "node:path";

const packagesDir = path.resolve(__dirname, "../../libs");

export default defineConfig({
  plugins: [pluginReact()],
  // plugins: [pluginReact(), pluginBabel(
  //   {babelLoaderOptions: (config, { addPlugins }) => {
  //     addPlugins([
  //       ["react-native-web", { commonjs: true }]
  //     ]);
  //     return config;
  //   }}
  // )],
  source: {
    alias: {
      'react-native': 'react-native-web',
    },
    include: [
      {
        and: [packagesDir, { not: /[\\/]node_modules[\\/]/ }],
      },
    ],
  },
  html: {
    template: "public/not-index.html",
  },
});
