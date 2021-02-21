import { BrowserWindow, Menu } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'

class MainWindow {
  constructor (win) {
    /* win代表electron窗口实例
     win is this electron window instance */
    this.win = win
  }

  initBrowserPage () {
    // Dev or not
    if (process.env.WEBPACK_DEV_SERVER_URL) {
      this.win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
      /* 开发环境下自启动开发者工具
        start developer tools in the development environment */
      this.win.webContents.openDevTools({ mode: 'detach' })
    } else {
      createProtocol('app')
      this.win.loadURL('app://./index.html')
    }

    this.win.on('closed', () => {
      this.win = null
      console.log('windows closed')
    })
  }

  createWindow () {
    if (this.win) {
      console.warn('window is already exists!')
      return
    }

    const win = new BrowserWindow({
      width: 1100,
      height: 770,
      minWidth: 1100,
      minHeight: 770,
      webPreferences: {
        /* 注意，这些设置有关程序的安全性，请谨慎使用！
          Note: these settings are related to the security of the program, please use it with caution! */
        enableRemoteModule: true, // Electron 10.x起需要主动启用才可在渲染进程中使用remote / Electron 10.x and above need to be actively enabled in order to use remote in the rendering process
        webSecurity: false, // 设为false允许跨域 / Set to false to allow cross-domain requests
        nodeIntegration: true // 允许渲染进程使用node.js / node integration, allow renderer process use node.js!
      },
      // eslint-disable-next-line no-undef
      icon: `${__static}/app.ico`,
      frame: false
    })

    this.win = win
    this.initBrowserPage()
    this.setWindowMenu()
  }

  setWindowMenu () {
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
            }
          ]
        }
      ]
      const menu = Menu.buildFromTemplate(template)
      Menu.setApplicationMenu(menu)
      return
    }

    Menu.setApplicationMenu(null)
  }
}

export default MainWindow
