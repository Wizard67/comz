import typescript from 'rollup-plugin-typescript2'
import vuePlugin from 'rollup-plugin-vue'

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
    typescript(),
    vuePlugin({
      needMap: false
    })
  ]
}