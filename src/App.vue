<script setup>
import Header from './components/Header.vue';
import ComicsList from './components/ComicsList.vue';
import axios from 'axios';
import {onMounted, provide, reactive, ref} from 'vue';

let comicsList = ref([]);
const apiKey = import.meta.env.VITE_API_KEY;
const hashedKey = import.meta.env.VITE_HASH_PASS;

const favoriteList = reactive([]);
provide('favoriteList', favoriteList);

async function getComics() {
  try {
    const response = await axios.get(
      `https://gateway.marvel.com:443/v1/public/comics?apikey=${apiKey}&hash=${hashedKey}`,
      {
        params: {
          format: 'comic',
          formatType: 'comic',
          ts: '1',
        },
      }
    );
    comicsList.value = response.data.data.results;
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => getComics());
</script>

<template>
  <div class="container">
    <Header></Header>
    <ComicsList v-bind:comicsList="comicsList"></ComicsList>
  </div>
</template>

<style scoped></style>
