/* eslint-disable no-undef */
import path from 'path'
import { Tray, nativeImage } from 'electron'

import EventManager from './event'
import WindowManager from './window'
import MenuManager from './menu'

import Translator from '../plugins/translator'

class AppManager {
  constructor () {
    this.translator = new Translator()
    this.windowManager = new WindowManager(this)
    this.menuManager = new MenuManager(this)
    this.eventManager = new EventManager(this)
  }

  /* 初始化app，创建窗口及托盘
  Initialize the app, create windows and tray */
  initApp () {
    this.windowManager.createAllWindows()
    this.createAppTray()
  }

  languageChange (lang) {
    this.translator.changeLang(lang)

    /* 重新设置托盘菜单（变更语言）
    Reset the language of the tray menu to change language of the tray */
    this.setAppTrayMenu()
  }

  /* Create app tray
  创建托盘 */
  createAppTray () {
    try {
      const iconPath = path.join(__static, 'app.ico')
      const trayIcon = nativeImage.createFromPath(iconPath)
      this.tray = new Tray(trayIcon)
      this.setAppTrayMenu()
    } catch (err) {
      console.error('Failed to create app tray, error:', err)
    }
  }

  /* Create tray menu
  创建托盘菜单 */
  setAppTrayMenu () {
    const menu = this.menuManager.AppTrayMenu()
    this.tray.setToolTip('运行中！Still Working!')
    this.tray.setContextMenu(menu)
  }
}

export default AppManager
