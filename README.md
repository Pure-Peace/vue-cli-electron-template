![bigLogo](http://otsu.fun/big_logo.png)
# 🔥vue-cli-electron-template
Using `vue-cli3` and `Electron6` built a modular desktop application template. with a custom borderless window, including `vue-router`, `vue-i18n`, `axios` and more common components, as well as some demo functions.

- 🌺English / 💖[中文](https://github.com/Pure-Peace/vue-cli-electron-template/blob/master/README_ZH.md)

<h2 align="center">⚡-Introduction-</h2>

🚀Build with `vue-cli` & `electron-builder`, modular design. added common plugins and demo features. You can happily use the `svg` icon in this project, use the `i18n` multi-language comfortably, switch the application language (overall! including the native menu of the electron and the browser page), multi-window management, and make network requests more convenient.


![screenshot](http://otsu.fun/shoot_eg.png)

---

## 📘These:
- 🍊Basic: `vue-cli` &` electron-builder`
- 🌕Router: `vue-router`
- 🍁Multilingual: `vue-i18n`
- 🌝Network Requester: `axios`
- 🚅Quick package: `electron-builder`
- 💚css preprocessor: `less`

## 🔍And:
- ⛅A custom window without native borders
- 🎨Modular design with object-oriented writing (mainProcess)
- 🍰Language switching for the entire program
- 🐳An svg component based on `svg-sprite-loader`
- 🏀`Electron6`: Demo of some apis.
- 🍉`vue-i18n`: Added demonstration of language switching, including language switching effect of `electron` native menu.
- 🍩`axios`: Added request demo.
- 🌼Use `ESlint` for code style specification.
- 🌠`vuex`
- I did not use any ui library, you can add as you like.


<h2 align="center">🏆-Start-</h2>


 1. **🍬Clone this repository**
 
```bash
git clone https://github.com/Pure-Peace/vue-cli-electron-template
```

 2. **🍮Enter the directory**
 
```bash
cd vue-cli-electron-template
```

 3. **🍙Install dependencies (yarn is recommended)**
 
```bash
yarn & npm install
```` 


 4. **🌽Start application**
 
```bash
yarn go & npm run go
```

 5. **🍭Packaging**
 
```bash
yarn packapp & npm run packapp
```


<h2 align="center">🍌-Structure-</h2>

**⚽files:**

- 🎰`./vue.config.js`: Contains **vue path alias**,` electron-builder`, `i18n` and other related configurations.
- ☔`src/background.js`: Main process entry file.
- 🐐`src/mainProcess.js`: Management of the entire program.
- 🚧`src/main.js`: Vue entry file.
- 🏨`src/backend.js`: network request interface and` axios` configuration.

**🍀Directories:**

- 🌲`src/locales`: `i18n` language translation file directory.
- 🐓`src/mainProcess`: Main process modular file directory.
- 🙀`src/mainProcess/events`: ipc and app event manager.
- 🌴`src/mainProcess/menus`: Menu manager.
- 🐏`src/mainProcess/plugins`: Currently only translator.
- 🙉`src/mainProcess/windows`: windows and windows manager.

---
**🔞postscript:**

🌹Beginner electron, any suggestion is appreciated.

And

🙈English is not good, most of the documents use Google Translate...
