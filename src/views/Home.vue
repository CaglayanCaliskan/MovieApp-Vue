<script setup>
import Header from '../components/Header.vue';
import ComicsList from '../components/ComicsList.vue';
import axios from 'axios';
import {onMounted, ref} from 'vue';

let comicsList = ref([]);
const apiKey = process.env.VITE_API_KEY;
const hashedKey = process.env.VITE_HASH_PASS;

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
    <Header v-bind:comicsList="comicsList"></Header>

    <ComicsList v-bind:comicsList="comicsList"></ComicsList>
  </div>
</template>

<style></style>
