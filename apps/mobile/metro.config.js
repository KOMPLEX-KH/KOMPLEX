const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");
const fs = require("fs");

// Base Expo/Metro config
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

const config = getDefaultConfig(projectRoot);

// Ensure TypeScript files are included in source extensions
if (!config.resolver.sourceExts.includes("ts")) {
  config.resolver.sourceExts.push("ts");
}
if (!config.resolver.sourceExts.includes("tsx")) {
  config.resolver.sourceExts.push("tsx");
}

// Store source extensions for use in resolver
const sourceExts = config.resolver.sourceExts;

// Helper function to resolve @core-* modules
const resolveCoreModule = (moduleName, packageDir) => {
  // Extract the module path after @core-*/
  const parts = moduleName.split("/");
  if (parts.length < 2) return null;

  const modulePath = parts.slice(1).join("/");

  // For @core-services, resolve to services (not app/services)
  if (packageDir === "services") {
    const basePath = path.resolve(projectRoot, "services");
    const fullPath = path.resolve(basePath, modulePath);

    // Try different extensions
    for (const ext of sourceExts) {
      const filePath = fullPath + ext;
      if (fs.existsSync(filePath)) {
        return filePath;
      }
    }

    // Try as directory with index file
    const indexPath = path.resolve(fullPath, "index");
    for (const ext of sourceExts) {
      const filePath = indexPath + ext;
      if (fs.existsSync(filePath)) {
        return filePath;
      }
    }

    return null;
  }

  // For other @core-* packages, still resolve from packages directory
  const basePath = path.resolve(workspaceRoot, `packages/${packageDir}`);
  const fullPath = path.resolve(basePath, modulePath);

  // Try different extensions
  for (const ext of sourceExts) {
    const filePath = fullPath + ext;
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }

  // Try as directory with index file
  const indexPath = path.resolve(fullPath, "index");
  for (const ext of sourceExts) {
    const filePath = indexPath + ext;
    if (fs.existsSync(filePath)) {
      return filePath;
    }
  }

  return null;
};

// Get Metro's default resolver
const MetroResolver = require("metro-resolver");

// Custom resolveRequest function to handle @core-* aliases
// Metro resolver signature: (context, realModuleName, platform)
config.resolver.resolveRequest = (context, realModuleName, platform) => {
  // Handle @core-services/* imports
  if (
    realModuleName &&
    typeof realModuleName === "string" &&
    realModuleName.startsWith("@core-services/")
  ) {
    const resolvedPath = resolveCoreModule(realModuleName, "services");
    if (resolvedPath && fs.existsSync(resolvedPath)) {
      return {
        filePath: resolvedPath,
        type: "sourceFile",
      };
    }
  }

  // Handle @core-types/* imports
  if (
    realModuleName &&
    typeof realModuleName === "string" &&
    realModuleName.startsWith("@core-types/")
  ) {
    const resolvedPath = resolveCoreModule(realModuleName, "types");
    if (resolvedPath && fs.existsSync(resolvedPath)) {
      return {
        filePath: resolvedPath,
        type: "sourceFile",
      };
    }
  }

  // Handle @core-configs/* imports
  if (
    realModuleName &&
    typeof realModuleName === "string" &&
    realModuleName.startsWith("@core-configs/")
  ) {
    const resolvedPath = resolveCoreModule(realModuleName, "config");
    if (resolvedPath && fs.existsSync(resolvedPath)) {
      return {
        filePath: resolvedPath,
        type: "sourceFile",
      };
    }
  }

  // Handle @core-utils/* imports
  if (
    realModuleName &&
    typeof realModuleName === "string" &&
    realModuleName.startsWith("@core-utils/")
  ) {
    const resolvedPath = resolveCoreModule(realModuleName, "utils");
    if (resolvedPath && fs.existsSync(resolvedPath)) {
      return {
        filePath: resolvedPath,
        type: "sourceFile",
      };
    }
  }

  // Fall back to Metro's default resolver for all other modules
  return MetroResolver.resolve(context, realModuleName, platform);
};

// Resolve packages from the app and the monorepo root (pnpm hoisted)
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];

config.resolver.disableHierarchicalLookup = true;
config.resolver.unstable_enableSymlinks = true;

// Watch the workspace root and packages so changes are detected
config.watchFolders = [
  projectRoot,
  workspaceRoot,
  path.resolve(workspaceRoot, "packages"),
];

module.exports = config;
