<template>
  <div class="footer">
    <div class="upper-footer">
      <div class="doc">
        <button class="alt" @click="open('https://coinstack.zendesk.com/hc/ko/articles/206641937')">서비스 이용 약관</button>
        <button class="alt" @click="open('https://coinstack.zendesk.com/hc/ko/articles/205903508')">개인정보 취급 방침</button>
      </div>
    </div>
    <div class="lower-footer">
      ⓒ 2018 BLOCKO,    Inc. All rights reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer',
  mounted () {
  },
  data () {
    return {
    }
  },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  },
  computed: {
    baseURI: function () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*footer*/
.footer {
  height: 80px;
  bottom: 0;
  padding: 12px 0 16px 0;
  background-color: #3366ff;
  text-align: center;
  margin-top: 10%;
}

.lower-footer{
  color: #c3c3c3;
  font-weight: bold;
  font-size: 12px;
  margin-top: 10px;
}
</style>
