<template>
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

