![bigLogo](http://otsu.fun/big_logo.png)
# vue-cli-electron-template
A desktop application template built using vue-cli3 and Electron6, using a custom borderless window, and including vue-router, vue-i18n, axios and other common components, as well as some demo functions.
- English / [中文](https://github.com/Pure-Peace/vue-cli-electron-template/blob/master/README_ZH.md)

<h2 align="center">-Introduction-</h2>

Build with `vue-cli` &` electron-builder`, added common plugins and demo features. You can happily use the `svg` icon in this project, use the `i18n` multi-language comfortably, switch the application language (including the native menu of the electron and the browser page), and make network requests more convenient.

## These:
- Basic: `vue-cli` &` electron-builder`
- Router: `vue-router`
- Multilingual: `vue-i18n`
- Network Requester: `axios`
- Quick package application: `electron-builder`
- css preprocessor: `less`

## And:
- A custom window without native borders
- An svg component based on `svg-sprite-loader`.
- `Electron6`: Demo of some apis.
- `vue-i18n`: Added demonstration of language switching, including language switching effect of` electron` native menu.
- `axios`: Added request demo.
- Use ESlint for code style specification.
- `vuex`
- No third-party ui library is introduced for your convenience.

<h2 align="center">-Screenshot-</h2>

![screenshot](http://otsu.fun/shoot_eg.png)

<h2 align="center">-Start-</h2>


 1. Clone this repository
`git clone https://github.com/Pure-Peace/vue-cli-electron-template`

 2. Enter the directory
`cd vue-cli-electron-template`

 3. Install dependencies (yarn is recommended)
`yarn` or `npm install`

 4. Start application
`yarn go` or `npm run go`

 5. Packaging
`yarn pack` or `npm run pack`


<h2 align="center">-Structure-</h2>

**files:**

- `./vue.config.js`: Contains ** vue path alias **,` electron-builder`, `i18n` and other related configurations.
- `src/background.js`: The main electron process.
- `src/main.js`: vue entry file.
- `src/backend.js`: network request interface and` axios` configuration.

**Directories:**

- `/src/locales`: `i18n` language translation file directory.

---
**postscript:**

Beginner electron, deficiencies, please advise.

And

English is not good, most of the documents use Google Translate...
