import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // 本地开发服务器监听配置
  devServer: {
    host: '0.0.0.0', // 监听所有网卡
    port: 3000,
  },

  // 引入全局样式文件（在 Nuxt 4 规范下，'~' 对应 app/ 目录）
  css: [
    '~/assets/css/main.css',
  ],

  // 组件自动注册配置：关闭子文件夹路径前缀
  components: [
    {
      path: '~/components',
      pathPrefix: false, // 允许直接使用 <About />、<Picture /> 等文件名作为组件名
    },
  ],

  // 挂载 Tailwind CSS v4 Vite 插件
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})