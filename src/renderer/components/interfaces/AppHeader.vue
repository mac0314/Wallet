<template>
  <div class="header">
    <div class="left-side">
      <div class="doc">
        <router-link :to="{path: '/'}"><button class="alt" v-on:click="test">지갑</button></router-link>
        <button class="alt" v-on:click="test">보내기</button>
      </div>
    </div>
    <div class="center-header">
      <div class="doc">
        <span class="title">
          Remote
        </span>
        <span class="title">
          블록 수
        </span>
        <span class="title">
          최종 컨펌 시간
        </span>
      </div>
    </div>
    <div class="right-header">
      <div class="doc">
        <router-link :to="{path: '/sc'}"><button class="alt" v-on:click="test">컨트랙트</button></router-link>
        <div>
          <span class="title">
            잔고
          </span>
          <span class="title">
            0,00 AERGO
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  components: {

  },
  data () {
    return {
    }
  },
  computed: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  text-align: center;
  display: flex;
  margin-bottom: 10%;
}
</style>
