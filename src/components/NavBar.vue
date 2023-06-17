<script setup>
import {inject, toRaw, watch, ref} from 'vue';

const favoriteList = inject('favoriteList');
const count = ref(favoriteList.length);
watch(favoriteList, (newValue) => {
  count.value = newValue.length;
});
</script>

<template>
  <nav>
    <div>icon</div>
    <div>Fav {{ count > 0 ? count : 'empty' }}</div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
}
nav > div {
  margin: 20px;
  border: 1px solid red;
}
</style>
