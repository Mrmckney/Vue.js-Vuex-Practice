<template>
    <h1 
      :style="{ color: $store.state.colorCode }"
    >
      {{ $store.state.counter }}
  </h1>
      <button @click="$store.dispatch('addCount')">+</button>
      <button @click="$store.dispatch('subCount')">-</button>
    <div class="container-a">
      {{ $store.state.counter }}
    <sup>2</sup> =
      {{ $store.getters.counterSquared }}
    </div>
    <div class="container-b">
      {{ $store.state.counter }}
    <sup>3</sup> =
      {{ $store.getters.counterCubed }}
    </div>
    <div>
      <input 
        class="input-modal"
        v-model="colorCode"
        placeholder="Enter color code" 
        type="text"
      >
    </div>
</template>

<script>
export default {
    name: 'CountHome',
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

<style scoped>
.container-a {
  font-size: 30px;
}
.container-b {
  font-size: 30px;
}
.input-modal {
  margin: 10px;
  padding: 10px;
  font-size: 30px;
}
</style>

