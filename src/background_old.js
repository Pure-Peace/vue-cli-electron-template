'use strict'
// 废弃 / Abandoned
// 新版改为模块化写法，此旧版本单文件不再更新
// The new version is changed to modular writing, 
// and the single file of this old version is no longer updated

import { app, protocol, BrowserWindow, Menu, Tray, ipcMain, dialog } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'

import i18n from './i18n'

const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win
let tray

global.lang = i18n.locale
global.messages = i18n.messages

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([{ scheme: 'app', privileges: { secure: true, standard: true } }])

// 自定义的i18n翻译器 / my i18n translator
function $t (text) {
  function $query (m) {
    for (let i = 0; i < t.length; i++) {
      const key = t[i]
      m = m[key]
      if (typeof (m) !== 'object') return m || text
    }
  }
  const sources = global.messages
  const t = text.split('.')
  let re = $query(sources[global.lang])
  if (re === text) re = $query(sources[i18n.fallbackLocale])
  return re
}

const ipc = ipcMain

// ipc通信示例 / ipc demo
ipc.on('showDialog', (sys, msg) => {
  dialog.showMessageBox({
    type: 'info',
    title: '收到消息！',
    message: '收到来自渲染进程的消息：',
    detail: msg
  })
})

// 语言变更 /language change
ipc.on('appLanguageChange', (sys, lang, messages) => {
  // 重设翻译器语言 / reset translator language
  global.lang = lang
  global.messages = messages
  // 重新创建托盘菜单 / reset tray menu
  const trayMenu = makeTrayMenu()
  tray.setContextMenu(trayMenu)
})

// 创建主窗口 / create main window
function createWindow () {
  win = new BrowserWindow({
    width: 1100,
    height: 770,
    minWidth: 1100,
    minHeight: 770,
    webPreferences: {
      // 允许跨域 / Allow cross domain
      webSecurity: false,
      nodeIntegration: true
    },
    // eslint-disable-next-line no-undef
    icon: `${__static}/app.ico`,
    frame: false
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    // 分离状态启动开发者工具 / Detach Status Launch Developer Tools
    if (!process.env.IS_TEST) win.webContents.openDevTools({ mode: 'detach' })
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  win.on('closed', () => {
    win = null
  })

  createMenu()
  if (!tray) createTray(makeTrayMenu())
}

// 创建托盘菜单 / create tray menu
function makeTrayMenu () {
  const template = [
    {
      key: '1',
      label: $t('trayMenu.reset'),
      click: () => {
        if (!win) createWindow()
        win.moveTop()
      }
    },
    {
      key: '2',
      label: $t('trayMenu.openLink'),
      click: () => {
        const { shell } = require('electron')
        shell.openExternal('https://www.electronjs.org/docs')
      }
    },
    {
      key: '3',
      label: $t('trayMenu.openDialog'),
      click: () => {
        dialog.showMessageBox({ type: 'info', title: $t('trayMenu.dialog.title'), message: $t('trayMenu.dialog.message'), detail: $t('trayMenu.dialog.detail') })
      }
    },
    { key: '4', label: $t('trayMenu.exit'), click: () => { app.exit() } }
  ]
  return Menu.buildFromTemplate(template)
}

// 设置主窗口菜单栏 / Set the main window menu bar
function createMenu () {
  // mac系统简化菜单 / Mac: Simplified menu
  if (process.platform === 'darwin') {
    const template = [
      {
        label: 'vue-cli-electron-template',
        submenu: [
          {
            role: 'about'
          },
          {
            role: 'quit'
          }]
      }]
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
  } else {
    // windows及linux系统设为无菜单 / windows&linux: Set to no menu
    Menu.setApplicationMenu(null)
  }
}

// 创建系统托盘 / create tray
function createTray (trayMenu) {
  // eslint-disable-next-line no-undef
  tray = new Tray(`${__static}/app.ico`)

  tray.setToolTip('运行中！\nStill Working!')
  tray.setContextMenu(trayMenu)
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    win = null
    tray.setToolTip('窗口被关闭了！\nWindow is closed!')
    tray.displayBalloon({
      title: '嗨~',
      content: '我在这里哦，并没有退出',
      noSound: true
    })
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {

  }
  createWindow()
})

app.on('before-quit', () => {
  tray.destroy()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
