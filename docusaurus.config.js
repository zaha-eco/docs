// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The simple way to manage printers and copiers.",
  // tagline: "The simple way to manage printers and copiers.",
  url: "https://docs.printtrackerpro.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "printtracker", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Print Tracker",
        logo: {
          alt: "Print Tracker Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "start",
            position: "left",
            label: "Guides",
          },
          // { to: "/blog", label: "Reference", position: "left" },
          // { to: "/blog", label: "Blog", position: "left" },
          // { to: "/blog", label: "Changelog", position: "right" },
          {
            href: "https://app-v2.printtrackerpro.com/download",
            label: "Download",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Hot Topics",
            items: [
              {
                label: "Getting Started",
                to: "/docs/start",
              },
              {
                label: "Remote Technician",
                to: "/docs/guides/remote-technician",
              },
              {
                label: "Custom Reports",
                to: "/docs/guides/reports",
              },
              {
                label: "Integrations",
                to: "/docs/guides/integrations",
              },
            ],
          },
          {
            title: "Helpful Guides",
            items: [
              {
                label: "Configuring Settings",
                to: "/docs/guides/settings",
              },
              {
                label: "Adding Users",
                to: "/docs/guides/adding-more-users",
              },
              {
                label: "Managing Supplies",
                to: "/docs/guides/supplies",
              },
              {
                label: "Entities & Hierarchy",
                to: "/docs/guides/entities",
              },
            ],
          },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/facebook/docusaurus",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Print Tracker`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
