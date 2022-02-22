import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// 插件自动加载
const modules = import.meta.globEager('./modules/*.ts')
Object.values(modules).forEach(v => {
	if (typeof v.default === 'function') {
		v.default(app)
	}
})
app.mount('#app')