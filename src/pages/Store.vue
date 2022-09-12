<template>
  <h1>{{ store.state.foo }}</h1>
</template>

<script lang="ts" setup>
import { createStore } from 'vuex'
const store = createStore({
      state: {
        foo: 'bar'
      }
    })

</script>

<style scoped>
h1 {
  color: red;
}
</style>