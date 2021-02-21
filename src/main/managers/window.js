import MainWindow from '../windows/mainWindow'

class WindowManager {
  constructor () {
    this.mainWindow = new MainWindow()
  }

  /* Create all windows
    创建所有窗口 */
  createAllWindows () {
    this.mainWindow.createWindow()
  }
}
export default WindowManager
