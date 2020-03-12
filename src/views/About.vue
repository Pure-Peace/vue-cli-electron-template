<template>
  <div style="text-align: center; ">
    <div style="font-size: 72px; font-weight: bolder;">
      Hi!
    </div>
    <div
      class="home-button app-action-button"
      style="margin: 40px auto 10px auto;"
      @click="sendRequest"
    >
      {{ $t(buttonText) }}
    </div>
    <h4>↑ Check out the console ↑</h4>
    <h1>vue-cli-electron-template</h1>
    <h2>Author: PurePeace</h2>
    <h2
      style="cursor: pointer; color: #FFF;"
      @click="()=>{const {shell} = require('electron'); shell.openExternal(link)}"
    >
      Github: <span style="user-select: text;">{{ link }}</span>
    </h2>
  </div>
</template>

<script>

export default {
  data () {
    return {
      link: 'https://github.com/Pure-Peace',
      buttonText: 'requestDemo.ready'
    }
  },
  methods: {
    sendRequest () {
      this.buttonText = 'requestDemo.requesting'
      this.$backend.demoGet(
        // 参数 / parameter
      ).then(res => {
        console.log(res)
        this.buttonText = 'requestDemo.requestSuccess'
      }).catch(error => {
        console.log(error)
        this.buttonText = 'requestDemo.requestFail'
      })
    }
  }
}
</script>
