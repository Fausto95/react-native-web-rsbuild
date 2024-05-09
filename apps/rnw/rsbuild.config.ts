import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import path from "node:path";

const packagesDir = path.resolve(__dirname, "../../libs");

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    alias: {
      "react-native": "react-native-web",
      "rn-core": "../../libs/core",
      // "rn-design-system": "../../libs/design-system",
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
