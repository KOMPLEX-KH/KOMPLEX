const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

// Base Expo/Metro config
const config = getDefaultConfig(__dirname);

// Resolve packages from the app and the monorepo root (pnpm hoisted)
config.resolver = {
  ...config.resolver,
  nodeModulesPaths: [
    path.resolve(__dirname, "node_modules"),
    path.resolve(__dirname, "../../node_modules"),
  ],
  disableHierarchicalLookup: true,
  unstable_enableSymlinks: true,
};

// Watch the workspace root so symlinked/hoisted deps are visible
config.watchFolders = [path.resolve(__dirname, "../../")];

module.exports = config;
