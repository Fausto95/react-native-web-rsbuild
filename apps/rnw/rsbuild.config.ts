import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import path from "node:path";

const packagesDir = path.resolve(__dirname, "../../libs");

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    alias: {
      "react-native": "react-native-web",
    },
    include: [
      {
        and: [packagesDir, { not: /[\\/]node_modules[\\/]/ }],
      },
    ],
  },
});
