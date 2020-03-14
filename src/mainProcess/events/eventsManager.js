import app from './app'
import ipc from './ipc'

class EventManager {
  // 创建app、ipc事件
  initEvents (appManager) {
    app.create(appManager)
    ipc.create(appManager)
  }
}

export default new EventManager()
