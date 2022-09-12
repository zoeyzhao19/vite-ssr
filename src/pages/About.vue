<template>
  <h1>{{ msg }}</h1>
  <p class="import-meta-url">{{ url }}</p>
  <Button>CommonButton</Button>
</template>

<script lang="ts" setup>
import Button from '../components/button'
const url = import.meta.env.SSR
      ? import.meta.url
      : document.querySelector('.import-meta-url')?.textContent
const msg = 'About'
</script>

<style scoped>
h1 {
  color: red;
}
</style>