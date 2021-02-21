// Vue entry file / vue入口文件

// Depends ------
import Vue from 'vue'
import App from 'renderer/App.vue'
import router from 'renderer/router'
import store from 'renderer/store'

// Components ------
import SvgIcon from 'components/svgIcon/index.vue'
import SvgIconList from 'components/svgIcon'

// Plugins ------
import i18n from 'plugins/i18n'
import Bus from 'plugins/bus'

// Backend ------
import $backend from 'backend'

// Less or Css ------
/* Nothing now */

// Add Prototype ------
Vue.prototype.$backend = $backend
Vue.prototype.SvgIconList = SvgIconList
Vue.prototype.$electron = require('electron') // You can access electron object with `this.$electron` in renderer process

Vue.config.productionTip = false

// Use plugins
Vue.use(Bus, { router })

// Use components ------
Vue.component('SvgIcon', SvgIcon)

// Vue options
const options = {
  router,
  store,
  i18n,
  render: h => h(App)
}

// Finally, returns the new vue instance
new Vue(options).$mount('#app')
