![大logo](http://otsu.fun/big_logo.png)
# vue-cli-electron-template
使用vue-cli3和Electron6构建的桌面应用模板，使用自定义的无原生边框窗口，并包含了vue-router、vue-i18n、axios等常用部件，以及一些演示功能。

- English / 中文

<h2 align="center">-介绍-</h2>

基于`vue-cli` & `electron-builder`，添加了常用插件及演示功能。您可以愉快的在本项目中使用`svg`图标，舒适的使用`i18n`多国语言支持切换应用语言（包括electron原生菜单及浏览器页面），以及更方便的进行网络请求等等。

## 这些：
- 基础：`vue-cli` & `electron-builder`
- 路由：`vue-router`
- 多语言：`vue-i18n`
- 网络请求器：`axios`
- 快速打包应用程序：`electron-builder`
- css预处理器：`less`

## 以及：
- 一个自定义的无原生边框窗口
- 一个基于`svg-sprite-loader`的svg组件。
- `Electron6`：部分api的演示。
- `vue-i18n`：已添加切换语言的演示，包括`electron`原生菜单的语言切换效果。
- `axios`：已添加请求演示。
- 使用`ESlint`进行代码风格规范。
- `vuex`
- 没有引入任何第三方ui库，方便您自行选择。

<h2 align="center">-截图-</h2>

![中文截图](http://otsu.fun/shoot_zh.png)

<h2 align="center">-开始-</h2>


 1. 克隆项目
`git clone https://github.com/Pure-Peace/vue-cli-electron-template`

 2. 进入项目目录
`cd vue-cli-electron-template`

 3. 安装依赖（推荐使用yarn）
`yarn` 或 `npm install`

 4. 启动
`yarn go` 或 `npm run go`

 5. 打包
`yarn pack` 或 `npm run pack`


<h2 align="center">-结构-</h2>

**文件：**

- `./vue.config.js`：包含**vue路径别名**、`electron-builder`、`i18n`等相关配置。
- `src/background.js`：electron主进程。
- `src/main.js`：vue入口文件。
- `src/backend.js`：网络请求接口及`axios`配置。

**目录：**

- `/src/locales`：`i18n` 语言翻译文件目录。

---
**后记：**

初学electron，不足之处，请多指教。
