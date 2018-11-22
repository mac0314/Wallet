<template>
  <div id="index">
    <main>
      <div class="left-side">
        <span class="title">
          계정 요약
          {{currentHeight}}
        </span>
        <div class="doc">
          <button class="alt" v-on:click="test">계정 추가</button>
        </div>
      </div>

      <div class="right-side">
        <div>
          <p>
            계정이 없습니다.
          </p>
        </div>
        <div>
          <p>
            강력한 암호를 가진 계정이 최소 1개는 있어야 합니다.
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'index',
    components: { 

    },
    data () {
      return {
        currentHeight: -1
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      async test () {
        const blockchain = await this.$aergo.blockchain();

        console.log(blockchain.bestHeight, blockchain.bestBlockHash);
        
        this.currentHeight = blockchain.bestHeight;
        
        // 3924
      },
      test2 () {
        console.log("Good")

        const baseURI = "http://192.168.1.107:3000"
        this.$http.get(
          `${baseURI}/blockchain`
        )
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
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
