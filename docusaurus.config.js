const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'animalarmors-wiki';
module.exports = {
  title: 'AnimalArmors', tagline: 'Броня и попоны для животных Minecraft',
  favicon: 'img/logo.svg',
  url: owner ? `https://${owner}.github.io` : 'https://example.org',
  baseUrl: owner ? `/${repository}/` : '/',
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'ru', locales: ['ru']},
  presets: [['classic', {docs: {routeBasePath: '/', sidebarPath: './sidebars.js'}, blog: false, theme: {customCss: './src/css/custom.css'}}]],
  themeConfig: {
    navbar: {title: 'AnimalArmors', logo: {alt: 'AnimalArmors', src: 'img/logo.svg'}, items: [{type:'docSidebar',sidebarId:'docs',label:'Вики',position:'left'}]},
    footer: {style: 'dark', copyright: 'AnimalArmors — документация плагина'},
    prism: {additionalLanguages: ['yaml','java','bash']},
    colorMode: {respectPrefersColorScheme: true}
  }
};
