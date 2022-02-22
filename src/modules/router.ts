import {App} from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
// import routes from "pages-generated"
const routes = setupLayouts(generatedRoutes)

export const router = createRouter({
  routes,
  history:createWebHistory()
})
export default (app: App) => app.use(router)