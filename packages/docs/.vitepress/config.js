const componentDemoPlugin = require('./markdown/componentDemo')

module.exports = {
  lang: 'zh-CN',
  title: 'COMZ',
  description: 'A UI components base on Vue3.',

  markdown: {
    config(md) {
      componentDemoPlugin(md)
    }
  },

  themeConfig: {
    repo: 'Wizard67/comz',
    docsDir: 'docs',
    editLinkText: 'Edit this page on GitHub',

    nav: [
      // { text: '', link: ''}
    ],

    sidebar: {
      '/': [
        {
          text: '组件',
          children: [
            { text: 'Button', link: '/components/button/'}
          ]
        }
      ]
    }
  }
}