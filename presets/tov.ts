import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver,
  VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers'

import AutoImports from 'unplugin-auto-import/vite'
import { dirResolver, DirResolverHelper } from 'vite-auto-import-resolvers'

export default () => {
  return [
    Vue(),
    Pages({
      dirs: 'src/views'
    }),
    // 布局系统
    Layouts({
      layoutsDirs: 'src/layout',
      defaultLayout: 'Default'
    }),
    // 组件自动按需引入
    Components({
      dirs: ['src/**/components', 'src/components'],
      dts: resolve(__dirname, './types/components.d.ts'),
      resolvers: [ElementPlusResolver(), VueUseComponentsResolver()]
    }),
    // 目录下 api 按需自动引入辅助插件
    DirResolverHelper(),
    // api 自动按需引入
    AutoImports({
      dts: './presets/types/auto-imports.d.ts',
      imports: ['vue', 'vue-router', '@vueuse/core'],
      resolvers: [
        ElementPlusResolver(),
        // dirResolver({ prefix: 'use' }),
        dirResolver({ target: 'api', suffix: 'Api' })
        // dirResolver({
        // 	target: 'stores',
        // 	suffix: 'Store'
        // })
        // 该部分配合 pinia 使用 会对"src/stores"下所有Store结尾的自动引用
      ]
    })
  ]
}
