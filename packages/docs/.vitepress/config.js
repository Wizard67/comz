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
            { text: 'Grid', link: '/components/grid/'},
            { text: 'Button', link: '/components/button/'},
            { text: 'Card', link: '/components/card/'},
            { text: 'Modal', link: '/components/modal/'},
            { text: 'Alert', link: '/components/alert/'},
            { text: 'Toast', link: '/components/toast/'},
            { text: 'Input', link: '/components/input/'},
            { text: 'Textarea', link: '/components/textarea/'},
            { text: 'Radio', link: '/components/radio/'},
            { text: 'Checkbox', link: '/components/checkbox/'},
          ]
        }
      ]
    }
  }
}