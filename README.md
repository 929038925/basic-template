# 项目模板功能

    建议node版本16 以上

## 文件目录路由

  src/views/users.vue -> /users

  src/views/users/profile.vue -> /users/profile

  src/views/settings.vue -> /settings

  使用时可以通过exclude属性配置排除不需要的部分路由

    例：  exclude: ["**/components/*.vue"]

  详见 [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)

## 组件自动按需引入

  目前提供elementPlus及Vueuse两个组件的自动引用

  对"src/**/components","src/components"两个路径下export出来的组件自动引用

  如需自定义请阅读 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 文档进一步配置

## api自动引入

  对'vue','vue-router','@vueuse/core'的api自动引用

  对"src/api"下export的自动引用

  详见 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)

## 默认布局系统

  "src/layout/Default.vue"作为默认布局
  
  也可使用非默认布局
  
  详见 [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)






