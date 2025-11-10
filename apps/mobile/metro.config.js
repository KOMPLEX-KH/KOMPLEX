// Metro configuration for Expo in a monorepo with hoisted node_modules
// Ensures Metro can resolve packages installed at the workspace root and TS sources in node_modules
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

/** @type {import('metro-config').MetroConfig} */
const config = getDefaultConfig(projectRoot);

// Allow Metro to resolve modules from the app and the workspace root (hoisted)
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];

// Ensure TS/TSX are included (including TS sources inside node_modules)
if (!config.resolver.sourceExts.includes('ts')) {
  config.resolver.sourceExts.push('ts');
}
if (!config.resolver.sourceExts.includes('tsx')) {
  config.resolver.sourceExts.push('tsx');
}

module.exports = config;


