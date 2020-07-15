import VuePlugin from 'rollup-plugin-vue'
import PostcssPlugin from 'rollup-plugin-postcss'
import Typescript from 'rollup-plugin-typescript2'

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
    VuePlugin({
      preprocessStyles: true
    }),
    PostcssPlugin(),
    Typescript(),
  ]
}