module.exports = {
  outputDir: '../static',
  devServer: {
    sockPort: 8594,
    writeToDisk: true,
    proxy: {
      '^/api': {
        target: 'http://localhost:4958',
        ws: true,
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        config: {
          path: './postcss.config.js'
        }
      },
      scss: {
        implementation: require('node-sass')
      }
    }
  }
};
