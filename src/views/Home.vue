<template>
  <h1>Home Page</h1>
  <h1 
    :style="{ color: $store.state.colorCode }"
  >
    {{ $store.state.counter }}
  </h1>
  <button @click="$store.dispatch('addCount')">+</button>
  <button @click="$store.dispatch('subCount')">-</button>
    <div>
    {{ $store.state.counter }}
    <sup>2</sup> =
    {{ $store.getters.counterSquared }}
    </div>
    <div>
      <input 
        v-model="colorCode"
        placeholder="Enter color code" 
        type="text"
      >
    </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode
      },
      set(newColor) {
        this.$store.dispatch('setColorCode', newColor)
      }
    }
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
