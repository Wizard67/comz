const container = require('markdown-it-container')

module.exports = function componentDemoPlugin(md) {
  md.use(container, 'component', {
    render(tokens, idx) {
      const token = tokens[idx]
      const info = token.info.trim().replace('component', '').trim()
      if (token.nesting === 1) {
        return `<Demo>\n
        <template #component>${info}</template>\n
        <template #code>`
      } else {
        return `</template>\n</Demo>`
      }
    }
  })
}
