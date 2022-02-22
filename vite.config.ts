import { resolve } from 'path'
import { defineConfig } from 'vite'
import Tov from './presets/tov'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`,
			'@/':`${resolve(__dirname, 'src')}/`
		}
	},
  plugins: [Tov()],
	server:{
		port: 8089, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
	}
})
