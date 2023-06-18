<script setup>
import Comic from './Comic.vue';
const props = defineProps({
  comicsList: {
    type: Array,
  },
});
</script>

<template>
  <h2>NETFLIX ORIGINALS COMİCS</h2>
  <section class="list">
    <Comic v-for="comic in comicsList" :comic="comic" :key="comic.id"> </Comic>
  </section>
</template>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 20px;
}
@media screen and (max-width: 1200px) {
  .list {
    grid-template-columns: auto auto;
  }
}
@media screen and (max-width: 668px) {
  .list {
    grid-template-columns: auto;
    padding: 10px;
    gap: 1rem;
  }
}
</style>
