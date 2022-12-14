import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'
import * as path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        vue(),
        createStyleImportPlugin({
            resolves:[
                ElementPlusResolve()
            ],
            libs: [
                // 如果没有你需要的resolve，可以在lib内直接写，也可以给我们提供PR
                {
                    libraryName: 'element-plus',
                    esModule: true,
                    resolveStyle: (name) => {
                        return `element-plus/lib/theme-chalk/${name}.css`
                    },
                    ensureStyleFile: true // 忽略文件是否存在, 导入不存在的CSS文件时防止错误。
                },
            ],
        })
    ],
    server: {
        port: 5173, //启动端口
        hmr: {
            host: '127.0.0.1',
            port: 5173
        },
        // 设置 https 代理
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5173',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, '')
            }
        }
    }
});

