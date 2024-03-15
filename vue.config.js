const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/app/main.ts'
    }
  },
  transpileDependencies: true
})
