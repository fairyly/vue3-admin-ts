import { defineConfig, ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 要想为传统浏览器提供支持，引入插件 legacy
import legacy from '@vitejs/plugin-legacy'
import WindiCSS from 'vite-plugin-windicss'
import { loadEnv } from 'vite';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  // 环境变量
  const { VITE_BASE_URL } = loadEnv(mode, process.cwd());
  return {
    // 需要用到的插件数组
    // https://github.com/vitejs/awesome-vite#plugins
    plugins: [
      vue(),
      WindiCSS(),
      legacy({
        targets: ['defaults', 'not IE 11']
      })
    ],
    // root: '', // **默认：**  `process.cwd()`, 项目根目录（`index.html` 文件所在的位置）
    base: VITE_BASE_URL, // **默认：**  `/` ,开发或生产环境服务的公共基础路径
    // mode: '',**默认：**  `'development'`（serve），`'production'`（build）,在配置中指明将会把 **serve 和 build** 时的模式 **都** 覆盖掉。也可以通过命令行 `--mode` 选项来重写。
    define: { appName: JSON.stringify('my-custom-name') }, // 定义全局常量替换方式, 通过 JSON.stringify
    publicDir: 'public', // **默认：**  `"public"`, 作为静态资源服务的文件夹
    cacheDir: 'node_modules/.vite', // **默认：**  `"node_modules/.vite"`,存储缓存文件的目录
    resolve: {
      alias: [
        {
          find: '@',
          replacement: resolve(__dirname, './src'),
        },
      ],
    },
    css: {
      preprocessorOptions: {
        // 指定传递给 CSS 预处理器的选项
      }
    },
    esbuild: {
      // ESbuild 会被应用在 `ts`、`jsx`、`tsx` 文件。你可以通过 `esbuild.include` 和 `esbuild.exclude` 对要处理的文件类型进行配置
    },
    // envDir: '', // **默认：**  `root`,用于加载 `.env` 文件的目
    server: {
      //开发服务器
      host: '0.0.0.0',
      port: 3000,
      proxy: {
        '/api': {
          target: 'https://admin.site/api/',
          // target: 'http://localhost:8001',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        }
      }
    },
    build: {
      // 构建选项
      outDir: 'dist', // 默认： dist,定输出路径
      assetsDir: 'assets', // 默认： assets ,指定生成静态资源的存放路径
      assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求
      // 如果指定了 build.lib，那么 build.assetsInlineLimit 将被忽略
      // cssCodeSplit: 'true', // 默认： true, 启用/禁用 CSS 代码拆分
      // rollupOptions: { // 自定义底层的 Rollup 打包配置
      //   // 确保外部化处理那些你不想打包进库的依赖
      //   external: ['vue'],
      //   output: {
      //     // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      //     globals: {
      //       vue: 'Vue'
      //     }
      //   }
      // },
      // https://rollupjs.org/guide/en/#big-list-of-options
      reportCompressedSize: false, // 默认： true, 启用/禁用 gzip 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能
    },
    optimizeDeps: {
      // 依赖优化
    },
    preview: {
      // 预览配置
    }
  }
})