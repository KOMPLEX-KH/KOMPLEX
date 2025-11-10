const path = require("path");

module.exports = function (api) {
  api.cache(true);
  const projectRoot = __dirname;
  const workspaceRoot = path.resolve(projectRoot, "../..");

  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          root: [projectRoot, workspaceRoot],
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".ios.js",
            ".android.js",
            ".js",
            ".jsx",
            ".json",
          ],
          alias: {
            "@": projectRoot,
            "@/components": path.resolve(projectRoot, "components"),
            "@/services": path.resolve(projectRoot, "app/services"),
            "@/types": path.resolve(projectRoot, "types"),
            "@/hooks": path.resolve(projectRoot, "hooks"),
            "@/configs": path.resolve(projectRoot, "configs"),
            "@/utils": path.resolve(projectRoot, "utils"),
            "@/constants": path.resolve(projectRoot, "constants"),
            // Note: @core-* aliases are handled by Metro resolver, not Babel
            // This prevents Babel from transforming them to relative paths
          },
        },
      ],
    ],
  };
};
