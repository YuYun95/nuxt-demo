/**
 * Nuxt.js 配置文件
 */

module.exports = {
  router: {
    base: '/abc',
    // routes：就是路由配置表，是个数组
    // resolve：是解析路由路径的
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'hello',
        path: '/hello',
        component: resolve(__dirname, 'pages/about.vue')
      })
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  }
}
