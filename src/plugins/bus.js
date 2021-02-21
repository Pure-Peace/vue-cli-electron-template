// Electron window global Bus
const { clipboard } = require('electron')

const install = (Vue, options) => {
  const Bus = new Vue({
    data () {
      return {
        process,
        clipboard, // electron clipboard object
        vueSet: Vue.set,
        dialog: undefined, // electron dialog
        win: undefined, // this electron window
        router: options.router,
        status: {
          isFocus: false,
          isBlur: false,
          keyPress: {}
        }
      }
    },
    created () {
      this.init()
      this.events()
    },
    methods: {
      init () {
        this.win = this.$electron.remote.getCurrentWindow()
        this.dialog = this.$electron.remote.dialog
      },
      events () {
        this.win.on('blur', () => {
          this.status.isBlur = true
          this.status.isFocus = false
          this.keyPress = {}
        })
        this.win.on('focus', () => {
          this.status.isFocus = true
          this.status.isBlur = false
        })
      },
      getAppManager () {
        return this.$electron.remote.getGlobal('appManager')
      },
      appGetPath (pathName = 'desktop') {
        return this.$electron.remote.app.getPath(pathName)
      },

      // router
      changePage (item) {
        this.router.push({
          name: item.name
        })
      },

      // ---
      emit (event, ...args) {
        this.$emit(event, ...args)
      },
      on (event, callback) {
        this.$on(event, callback)
      },
      off (event, callback) {
        this.$off(event, callback)
      }
    }
  })
  Vue.prototype.$bus = Bus
}

export default install
