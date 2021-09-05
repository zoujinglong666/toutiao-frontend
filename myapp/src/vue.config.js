module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.maizuo.com',
        changeOrigin: true
      }
    }
  }
}
