import app from '../events/app'
import ipc from '../events/ipc'

class EventManager {
  constructor (appManager) {
    this.appManager = appManager
    this.createEvents()
  }

  createEvents () {
    /* Create electron ipc and app events
      创建app、ipc事件 */
    app.create(this.appManager)
    ipc.create(this.appManager)
  }
}

export default EventManager
