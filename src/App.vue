<template>
  <nav>
    <router-link to="/">Directives</router-link> |
    <router-link to="/about">Intro</router-link> |
    <router-link to="/core">Core</router-link>
  </nav>

  <img alt="Vue logo" class="w-fit m-auto" src="./assets/logo.png">
  <router-view/>
</template>

<script setup>
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
