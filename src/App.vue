<template>
  <div id="nav">
    <router-link v-if="isVisable === false" @click="isVisable = !isVisable" to="/">Proceed to Home</router-link>
    <router-link v-if="isVisable === true" @click="isVisable = !isVisable" to="/about">Proceed to About</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isVisable: false
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

a {
  text-decoration: none;
}
</style>
