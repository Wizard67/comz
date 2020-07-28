import VuePlugin from 'rollup-plugin-vue'
import SvgPlugin from 'rollup-plugin-svg'
import PostcssPlugin from 'rollup-plugin-postcss'
import Typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  input: {
    'index': 'index.ts'
  },
  output: [
    {
      dir: 'dist',
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
    PostcssPlugin(),
    Typescript(),
    SvgPlugin()
  ]
}