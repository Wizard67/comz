import VuePlugin from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import icons from './entries'

export default {
  input: {
    'index': 'index.js',
    ...icons
  },
  output: [{
    dir: 'dist',
    format: 'esm',
    chunkFileNames: '[name].js'
  }],
  external: [ 'vue' ],
  plugins: [
    nodeResolve(),
    VuePlugin()
  ]
}