import path from 'path'
import VuePlugin from 'rollup-plugin-vue'
import PostcssPlugin from 'rollup-plugin-postcss'
import Typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const outputDir = 'dist'

export default {
  input: {
    'index': 'index.ts',
    'button': 'src/button/button.vue',
    'card': 'src/card/card.vue',
    'grid': 'src/grid/grid.vue',
    'grid-item': 'src/grid/grid-item.vue',
    'modal': 'src/modal/modal.vue',
    'alert': 'src/alert/alert.vue',
    'toast': 'src/toast/toast.vue',
    'input': 'src/input/input.vue',
    'textarea': 'src/textarea/textarea.vue',
    'radio': 'src/radio/radio.vue',
    'checkbox': 'src/checkbox/checkbox.vue',
    'select': 'src/select/select.vue',
    'option': 'src/select/option.vue',
    'icon': 'src/icon/icon.vue',
    'space': 'src/space/space.vue',
    'form': 'src/form/form.vue',
    'form-item': 'src/form/form-item.vue',
  },
  output: [
    {
      dir: outputDir,
      format: 'esm',
      chunkFileNames: '[name].js',
      globals: {
        vue: 'Vue'
      }
    }
  ],
  external: [ 'vue' ],
  plugins: [
    nodeResolve(),
    VuePlugin({
      preprocessStyles: true
    }),
    PostcssPlugin({
      extract: true,
      extract: path.resolve(outputDir, 'style.css')
    }),
    Typescript({
      useTsconfigDeclarationDir: true
    })
  ]
}