<template>
  <div class="wallet">
    <main>
      <div class="left-side">
        <span class="title">
          계정 요약
        </span>
        <div class="doc">
          <button class="alt">계정 추가</button>
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
    name: 'wallet',
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
  
</style>
