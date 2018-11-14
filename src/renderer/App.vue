<template>
  <div id="app">
    <div id="wrapper">
      <app-header></app-header>
      <router-view></router-view>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
  import AppHeader from '@/components/interfaces/AppHeader'
  import AppFooter from '@/components/interfaces/AppFooter'

  export default {
    name: 'desktop-wallet',
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
