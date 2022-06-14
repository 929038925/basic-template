# 项目模板功能

    建议node版本16 以上

## 文件目录路由

src 下 views 之后的目录会自动转换为路由

- src/views/index.vue -> /

- src/views/users/index.vue -> /users

- src/views/users.vue -> /users

- src/views/users/profile.vue -> /users/profile

- src/views/settings.vue -> /settings

使用时可以通过 exclude 属性配置排除不需要的部分路由

    例：  exclude: ["**/components/*.vue"]

动态路由：

- src/pages/users/[id].vue -> /users/:id (/users/one)

- src/pages/[user]/settings.vue -> /:user/settings (/one/settings)

也可以配置更多的基础路由

详见 [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)

## 默认布局系统

该插件需配合vite-plugin-pages使用

"src/layout/Default.vue"作为默认布局

也可使用非默认布局

通过代码块<route>{ meta: { layout: users } }</route>指定当前页面的默认布局为'src/layout/users.vue' ，也可以配置响应路由的信息及对应布局

详见 [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)
## 组件自动按需引入

目前提供 elementPlus 及 Vueuse 两个组件库的自动按需引用

对"src/\*\*/components","src/components"两个路径下 export 出来的组件自动引用

也可以通过配置对其他路径下的组件自动引用

例：dirs: ['src/**/components', 'src/components'] （对src下任意components文件夹下的组件自动按需引用）

组件库支持：
    Ant Design Vue
    Arco Design Vue
    Element Plus
    Element UI
    Headless UI
    IDux
    Inkline
    Naive UI
    Prime Vue
    Vant
    VEUI
    Varlet UI
    View UI
    Vuetify
    VueUse Components
    Quasar
    TDesign

详见 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 

## api 自动引入

对'vue','vue-router','@vueuse/core'等插件的 api 自动引用

也可通过resolver实现对组件库的api自动按需引用 例如：ElementPlusResolver

配置 dirResolver({ target: 'api', suffix: 'Api' })  对"src/api"下 export 的自动引用

也可以通过配置对其他路径下的 api 自动引用

详见 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
