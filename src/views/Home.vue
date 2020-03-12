<template>
  <div style="text-align: center;">
    <div>
      <img src="~static/logo.png">
    </div>
    <div style="font-size: 21px; padding: 20px;">
      <!--这是一段使用了i18n的文字，请看locales文件夹中的翻译文件-->
      <!--This is a text using i18n, please see the translation files in the locales folder-->
      {{ $t("welcome") }}
    </div>
    <div style="display: flex; justify-content: center;">
      <div
        class="home-button app-action-button"
        @click="openDialogByRemote"
      >
        {{ $t("Click Me!") }}
      </div>
      <div
        class="home-button app-action-button"
        @click="openDialogByIpc"
      >
        Click Me!!!
      </div>
    </div>
  </div>
</template>

<script>
const ipc = require('electron').ipcRenderer
export default {
  data () {
    return {

    }
  },
  methods: {
    openDialogByRemote () {
      const { dialog } = require('electron').remote
      dialog.showMessageBox({ title: '你好', message: '来自主进程的消息：', detail: '我是来自主进程的dialog，使用remote过来的！', type: 'info' })
    },
    openDialogByIpc () {
      ipc.send('showDialog', `<${this.$t('a message')}>`)
    }
  }

}
</script>

<style>
.home-button {
  background-color: #263238;
  opacity: 1;
  border-radius: 4px;
  cursor: pointer;
  height: 45px;
  width: 150px;
  margin: 10px 10px;
  text-align: center;
  line-height: 45px;
}
</style>
