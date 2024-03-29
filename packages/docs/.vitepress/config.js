const componentDemoPlugin = require('./markdown/componentDemo')

const components = [
  { text: '通用' },
  { text: 'Button', link: '/components/button/' },
  { text: 'Icon', link: '/components/icon/' },

  { text: '布局' },
  { text: 'Grid', link: '/components/grid/' },
  { text: 'Flex', link: '/components/flex/' },

  { text: '容器' },
  { text: 'Card', link: '/components/card/' },
  { text: 'Modal', link: '/components/modal/' },
  { text: 'Panel', link: '/components/panel/' },

  { text: '表单' },
  { text: 'Form', link: '/components/form/' },
  { text: 'Input', link: '/components/input/' },
  { text: 'Textarea', link: '/components/textarea/' },
  { text: 'Radio', link: '/components/radio/' },
  { text: 'Checkbox', link: '/components/checkbox/' },
  { text: 'Select', link: '/components/select/' },
  { text: 'Switch', link: '/components/switch/' },
  { text: 'Slider', link: '/components/slider/' },

  { text: '容器' },
  { text: 'Alert', link: '/components/alert/' },
  { text: 'Toast', link: '/components/toast/' },
  { text: 'Tooltip', link: '/components/tooltip/' }
]

const demos = [
  { text: '布局', link: '/demo/layout/' }
]

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
      { text: 'playground', link: '/playground/'}
    ],

    sidebar: {
      '/': [
        {
          text: '组件',
          children: components
        },
        {
          text: '示例',
          children: demos
        }
      ],
      '/components/': [
        {
          text: '组件',
          children: components
        }
      ],
      '/demo/': [
        {
          text: '示例',
          children: demos
        }
      ]
    }
  }
}