module.exports = {
  title: 'vi-kits',
  description: '高频的工具库',
  head: [],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    navbar: true,
    sidebar: {
      '/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            '../home/'
          ]
        },
        {
          title: '通用工具',
          children: [
            '../common/cookie/',
            '../common/currency/',
            '../common/date/',
            '../common/domain/',
            '../common/file/',
            '../common/firstUpper/',
            '../common/idCard/',
            '../common/ip/',
            '../common/isNil/',
            '../common/math/',
            '../common/number/',
            '../common/padLeftZero/',
            '../common/printArea/',
            '../common/storage/',
            '../common/typeCheck/',
            '../common/urlParams/',
          ]
        },
        {
          title: 'vue',
          collapsable: false
        },
        {
          title: 'react',
          collapsable: false
        }
      ]
    }
  }
}