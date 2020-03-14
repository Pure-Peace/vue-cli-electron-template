import { ipcMain, dialog } from 'electron'

class IpcEvents {
  // 创建ipc事件
  create (AppManager) {
    this.AppManager = AppManager

    // 翻译器函数
    // Translator function
    const $t = AppManager.translator.get()

    // ipc通信示例 / ipc demo
    ipcMain.on('showDialog', (sys, msg) => {
      dialog.showMessageBox({
        type: 'info',
        title: '收到消息！',

        // 在任何能调用翻译器函数的地方都能使用多语言
        // Multi-language support where translator functions are available
        message: $t('reciveFromRenderer'),
        detail: msg
      })
    })

    // 语言变更事件 / language change event
    ipcMain.on('appLanguageChange', (sys, lang) => {
      this.AppManager.languageChange(lang)
    })
  }
}

export default new IpcEvents()
