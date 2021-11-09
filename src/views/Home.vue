<template>
  <h1>Home Page</h1>
  <CountHome />
</template>

<script>
import CountHome from '../components/CountHome.vue'

export default {
  name: 'Home',
  components: {
    CountHome,
  }
}
</script>

<style>
button {
  margin: 10px;
  padding: 0 10px;
  background: #808080;
  border-width: 5px;;
  border-style: solid;
  border-radius: 3px;
  border-color: #000000;
}
button:hover {
  background: #ffffff;
}
</style>
