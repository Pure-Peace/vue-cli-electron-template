![bigLogo](http://otsu.fun/big_logo.png)

# 🔥vue-cli-electron-template

![npm](https://img.shields.io/npm/v/@vue/cli?color=aa&label=vue-cli)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Pure-Peace/vue-cli-electron-template?color=yellow&logo=yellow&logoColor=yellow)
[![Build Status](https://travis-ci.org/Pure-Peace/vue-cli-electron-template.svg?branch=master)](https://travis-ci.org/Pure-Peace/vue-cli-electron-template)
[![codebeat badge](https://codebeat.co/badges/ee804451-ff1f-4e2f-9858-b0b3e2d96a3f)](https://codebeat.co/projects/github-com-pure-peace-vue-cli-electron-template-master)
![license](https://img.shields.io/badge/license-MIT-000000.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Pure-Peace/vue-cli-electron-template?color=aa&label=Lightweight&logo=aa&logoColor=aa)
![GitHub last commit](https://img.shields.io/github/last-commit/Pure-Peace/vue-cli-electron-template)

⭐ Using **vue-cli 4** and **Electron 11.x** built a modular desktop application template.

The directory structure is clear and the main process (electron) is separated from the rendering process (vue), which is easy to extend and manage.

Fast packaging, one-click multi-language switch. Use custom borderless windows, has added easy-to-use **svg** icon components, and **axios** , **vuex**, **vue-router**, **vue-i18n** and global bus **bus**, out of the box, project extremely fast start.

- English / 💖 [中文](https://github.com/Pure-Peace/vue-cli-electron-template/blob/master/README_ZH.md)
- [Simple document](https://github.com/Pure-Peace/vue-cli-electron-template/wiki)

## Release Notes:

- [v0.3.0](https://github.com/Pure-Peace/vue-cli-electron-template/releases/tag/0.3.0): Old version. But some dependencies were upgraded and minor refactoring was done.
- [v1.0.0](https://github.com/Pure-Peace/vue-cli-electron-template/releases/tag/1.0.0): After refactoring. Clearer directory structure. Also fix the problem of tray setting icon under MacOS.
- [v2.0.0](https://github.com/Pure-Peace/vue-cli-electron-template/releases/tag/2.0.0): Electron 11.x version

### Detailed:

- Custom borderless windows.
- Clear directory structure with modular design. Separation of main process (Electron) and rendering process (Vue), easy to extend and manage.
- Fully support multiple languages and switch freely.
- **svg** icon component, you can freely add and use svg icons, very easy
- **Electron**: contains some demos.
- **vue-i18n**：Added language switching demo, including language switching for **Electron** native components.
- Wrapped **axios**, Api interface is separated from the requester for easy management.
- Use **ESlint** for code style specification.
- Added **vuex**, **vue-router**, and a handy global bus **bus**.

**The project does not add any third-party ui libraries, so you can add as many as you like.**

## 📷 Screenshots:

![screenshot](http://otsu.fun/demos/0.png)
![screenshot](http://otsu.fun/demos/1.png)
![screenshot](http://otsu.fun/demos/s1.png)
![screenshot](http://otsu.fun/demos/2.png)
![screenshot](http://otsu.fun/demos/3.png)

---

## 🏆 Start

- Choose either **yarn** or **npm**

**🍬 Clone**

```bash
git clone https://github.com/Pure-Peace/vue-cli-electron-template
```

```bash
cd vue-cli-electron-template
```

**🍙 Install**

```bash
yarn
```

```bash
npm install
```

**🌽 Run**

```bash
yarn go
```

```bash
npm run go
```

**🍭 Build**

```bash
yarn buildapp
```

```bash
npm run buildapp
```

### 🍌Structure:

#### Important:

- 🐓`src/main`：Main process (Electron).
- 🙀`src/renderer`：Renderer process (Vue).
- 🎰`vue.config.js`: Includes **Path alias**、**electron-builder**、**i18n** And app configurations.

#### Others:

- 🏨`src/backend`: Api backend, and **axios** configurations.
- 🌲`src/locales`：**i18n** Translation file directory.
- 🙀`src/main/events`：Main process (Electron) **ipc** and **app** events.

---

### 🌹 Special thanks:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars0.githubusercontent.com/u/1502581?&v=4" width="100px;" alt="Hancel Lin"/><br /><sub><b>Hancel Lin</b></sub>](https://github.com/imlinhanchao)<br /> |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

Welcome issues
