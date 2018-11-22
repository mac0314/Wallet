<template>
  <div id="smart-contract">
    <main>
      <div class="left-side">
        <span class="title">
          컨트랙트
        </span>
        <div class="doc">
          <button class="alt" v-on:click="test">신규 컨트랙트 등록</button>
        </div>
        <span class="title">
          주문형 컨트랙트
        </span>
        <p>
          이미 블럭체인에 올려진 컨트랙트를 열람하고 사용하기 위해서는 그것의 주소와 JSON으로 된 인터페이스 설정양식이 필요합니다.
        </p>
        <div class="doc">
          <button class="alt" v-on:click="test">컨트랙트 열람</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'smart-contract',
    components: {

    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  main {
    justify-content: space-between;
    min-height: 100%;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
