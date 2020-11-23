const container = require('markdown-it-container')

module.exports = function componentDemoPlugin(md) {
  md.use(container, 'component', {
    render(tokens, idx) {
      const token = tokens[idx]
      const info = token.info.trim().replace('component', '').trim()
      if (token.nesting === 1) {
        return `<div class="demo">\n
        <div class="demo-component">${info}</div>\n
        <div class="demo-code">`
      } else {
        return `</div></div>\n`
      }
    }
  })
}
