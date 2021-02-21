![bigLogo](http://otsu.fun/big_logo.png)

# 🔥vue-cli-electron-template

![npm](https://img.shields.io/npm/v/@vue/cli?color=aa&label=vue-cli)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Pure-Peace/vue-cli-electron-template?color=yellow&logo=yellow&logoColor=yellow)
[![Build Status](https://travis-ci.org/Pure-Peace/vue-cli-electron-template.svg?branch=master)](https://travis-ci.org/Pure-Peace/vue-cli-electron-template)
[![codebeat badge](https://codebeat.co/badges/ee804451-ff1f-4e2f-9858-b0b3e2d96a3f)](https://codebeat.co/projects/github-com-pure-peace-vue-cli-electron-template-master)
![license](https://img.shields.io/badge/license-MIT-000000.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Pure-Peace/vue-cli-electron-template?color=aa&label=Lightweight&logo=aa&logoColor=aa)
![GitHub last commit](https://img.shields.io/github/last-commit/Pure-Peace/vue-cli-electron-template)

⭐ 使用 **vue-cli 4** 和 **Electron 11.x** 构建的模块化的桌面应用程序模板。目录结构清晰，主进程（Electron）与渲染进程（Vue）分离，易于扩展和管理。

支持快速打包、一键多语言切换。使用自定义无边框窗口，已添加易用的**svg**图标插件，封装了**axios** （Api 接口资源与请求器分离）、**vuex**、**vue-router**、**vue-i18n** 和 全局总线 **bus**，开箱即用，项目极速启动。

- [English](https://github.com/Pure-Peace/vue-cli-electron-template/blob/master/README.md) / 💖 中文
- [简要文档](https://github.com/Pure-Peace/vue-cli-electron-template/wiki)

## Release Notes:

- [v0.3.0](https://github.com/Pure-Peace/vue-cli-electron-template/releases/tag/0.3.0): 老版本。不过升级了一些依赖，进行了微小的重构。
- [v1.0.0](https://github.com/Pure-Peace/vue-cli-electron-template/releases/tag/1.0.0): 整体重构，目录结构更加清晰。同时修复 MacOS 下托盘设置图标的问题。
- [v2.0.0](https://github.com/Pure-Peace/vue-cli-electron-template/releases/tag/2.0.0): Electron 11.x 版本

### 详细说明:

- 使用自定义的无边框窗口。
- 清晰的目录结构，模块化设计。主进程（Electron）和渲染进程（Vue）分离，方便扩展和管理。
- 完全支持多语言，切换自如。
- 已编写**svg**图标组件，您可自由添加和使用 svg 图标，非常简单。
- **Electron**：包含一些 api 使用演示。
- **vue-i18n**：添加了语言切换效果演示，包括对`electron`原生组件的语言切换效果。
- 已封装的**axios**，Api 接口与请求器分离，方便管理。
- 使用**ESlint**进行代码风格规范。
- 已添加**vuex**、**vue-router**，还有一个方便的全局总线**bus**。

**项目未添加任何第三方 ui 库，您可以随心所欲选择自己喜欢的添加。**

## 📷 演示截图:

![screenshot](http://otsu.fun/demos/0.png)
![screenshot](http://otsu.fun/demos/1.png)
![screenshot](http://otsu.fun/demos/s1.png)
![screenshot](http://otsu.fun/demos/2.png)
![screenshot](http://otsu.fun/demos/3.png)

---

## 🏆 开始

- 任选 **yarn** 或 **npm** 其一

**🍬 克隆项目**

```bash
git clone https://github.com/Pure-Peace/vue-cli-electron-template
```

```bash
cd vue-cli-electron-template
```

**🍙 安装依赖**

```bash
yarn
```

```bash
npm install
```

**🌽 启动应用**

```bash
yarn go
```

```bash
npm run go
```

**🍭 打包应用**

```bash
yarn buildapp
```

```bash
npm run buildapp
```

### 🍌 目录结构

#### 重要：

- 🐓`src/main`：主进程（Electron 相关）。
- 🙀`src/renderer`：渲染进程（Vue 或网页相关）。
- 🎰`vue.config.js`: 包括**路径别名**、**electron-builder**、**i18n** 等各种 app 配置项。

#### 其它：

- 🏨`src/backend`: Api 后端接口资源，及**axios**配置项。
- 🌲`src/locales`：**i18n** 多语言翻译文件目录。
- 🙀`src/main/events`：主进程（Electron） **ipc** 及 **app** 事件。

---

### 🌹 特别感谢

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/1502581?&v=4" width="100px;" alt="Hancel Lin"/><br /><sub><b>Hancel Lin</b></sub>](https://github.com/imlinhanchao)<br /> |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

🌺 欢迎您提出建议
