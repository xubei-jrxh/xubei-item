module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        // 当他碰见前面是以api开头的路径，就立马把域名给改了
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' }, // 代理会把身份标识的东西去掉换成空串
        changeOrigin: true,
        // 目标位置
        ws: true,
      },
      '/hao': {
        // 当他碰见前面是以api开头的路径，就立马把域名给改了
        target: 'http://localhost:8000',
        pathRewrite: { '^/hao': '' }, // 代理会把身份标识的东西去掉换成空串
        changeOrigin: true,
      },
      '/zzx': {
        target: 'http://user-server.xubei.com/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          // 重写路径: 去掉路径中开头的'/api'
          '^/zzx': '',
        },
      },
    },
  },
}
