<template>
    <h2 :style="{ color: $store.state.colorCode }"> This number is on all pages {{ $store.state.counter }}</h2>
    <h3> This Number is on this page only {{ counter }}</h3>
    <button @click="addCount">+</button>
    <button @click="subCount">-</button>
</template>

<script>
export default {
    name: 'CountAbout',
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        addCount() {
            this.counter++
        },
        subCount() {
            if(this.counter > 0){
                this.counter--
            }
        }
    }
}
</script>