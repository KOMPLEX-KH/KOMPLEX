module.exports = {
  siteUrl: "https://komplex.app",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/auth/", "/me/"],
      },
    ],
    additionalSitemaps: ["https://komplex.app/sitemap.xml"],
  },
  exclude: ["/api/*", "/auth/*", "/me/*", "/admin/*"],
  changefreq: "daily",
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority based on path
    let priority = 0.7;
    if (path === "/") priority = 1.0;
    else if (path.includes("/docs/")) priority = 0.9;
    else if (path.includes("/ai/")) priority = 0.9;
    else if (path.includes("/videos/")) priority = 0.8;
    else if (path.includes("/forums/")) priority = 0.8;

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
