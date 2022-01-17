// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevDocs',
  tagline: 'Developers need documentation and this is where I write down what they haven\'t',
  url: 'https://devdocs.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Philificent', // Usually your GitHub org/user name.
  projectName: 'devdocs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/philificent/devdocs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
              'https://github.com/philficent/devdocs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'DevDocs',
          logo: {
            alt: 'My Site Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'index',
              position: 'left',
              label: 'Docs',
            },
            // {to: '/blog', label: 'Blog', position: 'left'},
            {
              href: 'https://github.com/philificent/docusaurus',
              label: 'GitHub',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Links',
              items: [
                {
                  label: 'Docs',
                  to: '/docs',
                },
                {
                  label: 'Snippets',
                  to: '/docs/snippets',
                },
              ],
            },
            // {
            //   title: 'Community',
            //   items: [
            //     {
            //       label: 'Stack Overflow',
            //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            //     },
            //     {
            //       label: 'Discord',
            //       href: 'https://discordapp.com/invite/docusaurus',
            //     },
            //     {
            //       label: 'Twitter',
            //       href: 'https://twitter.com/docusaurus',
            //     },
            //   ],
            // },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: '/blog',
                },
                {
                  label: 'GitHub',
                  href: 'https://github.com/philificent/devdocs',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} devdocs.dev ~ Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
};

module.exports = config;
