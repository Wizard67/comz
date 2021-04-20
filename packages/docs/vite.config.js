import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: [
      // 'comz',
      '@comz/icons',
      '@comz/vca'
    ]
  },
  build: {
    cleanCssOptions: {
      format: 'beautify',
      level: 0
    }
  }
})
