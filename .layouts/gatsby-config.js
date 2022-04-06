const path = require("path");
const pathPrefix = "/";
const siteMetadata = {
  title: "A personal wiki powered by Obsidian and Gatsby.",
  shortName: "Vidya",
  description:
    "This is my personal wiki and a commonplace book; notes by me, for me.",
  twitterName: "zoobhalu",
  imageUrl:
    "https://raw.githubusercontent.com/zubayrrr/twiki/main/bin/image.gi1fwk2ysjp.png",
  siteUrl: "https://wiki.zubayrali.in",
};
module.exports = {
  siteMetadata,
  pathPrefix,
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/..`,
        ignore: [`**/\.*/**/*`, `**/bin/**`, `**/.git/**`, `**/.obsidian/**`, `**/nb/**`],
      },
    },
    {
      resolve: "gatsby-theme-primer-wiki",
      options: {
        icon: "./static/logo.png",
        sidebarComponents: ["summary", "tag"],
        defaultIndexLatestPostCount: 10,
        shouldShowLatestOnIndex: true,
        searchBody: true,
        defaultColorMode: "night",
        summaryDepth: 1,
        summary1DepthIndent: true,
        nav: [
          {
            title: "Latest",
            url: "/latest/",
          },
          {
            title: "Twitter",
            url: "https://twitter.com/zoobhalu",
          },
          {
            title: "Blog",
            url: "https://zubayrali.in/",
          },
          {
            title: "About",
            items: [
              {
                title: "Now",
                url: "/Now/",
              },
              {
                title: "About",
                url: "/About/",
              },
              {
                title: "Github",
                url: "https://github.com/zubayrrr",
              },
              {
                title: "Source Code",
                url: "https://github.com/zubayrrr/wiki",
              },
            ],
          },
        ],
        editUrl: "https://github.com/zubayrrr/wiki/tree/main/",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.shortName,
        start_url: pathPrefix,
        background_color: `#f7f0eb`,
        display: `standalone`,
        icon: path.resolve(__dirname, "./static/logo.png"),
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: siteMetadata.siteUrl,
        sitemap: `${siteMetadata.siteUrl}/sitemap/sitemap-index.xml`,
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [],
      },
    },
  ],
};
