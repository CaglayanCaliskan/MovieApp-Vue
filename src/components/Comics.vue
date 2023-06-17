<script setup>
import Comic from './Comic.vue';
const props = defineProps({
  comicsList: {
    type: Array,
  },
});
</script>

<template>
  <h1>NETFLIX ORIGINALS</h1>
  <section class="list">
    <Comic v-for="comic in comicsList" :comic="comic"> </Comic>
  </section>
</template>

<style scoped>
.list {
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 2rem;
}
</style>
