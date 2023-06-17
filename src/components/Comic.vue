<script>
import {ref, inject} from 'vue';

export default {
  name: 'Comic',
  props: {
    comic: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      favorites: inject('favoriteList'),
    };
  },

  methods: {
    toggleFavorite(id) {
      const fav = this.favorites.find((m) => m == id);
      if (fav) {
        this.favorites.splice(this.favorites.indexOf(id), 1);
      } else {
        this.favorites.push(id);
      }
    },
    isFavorite(id) {
      return this.favorites.some((f) => f == id);
    },
  },
};
</script>

<template>
  <div class="box" @click="isFavorite(comic.id)">
    {{ comic.id }}
    <li style="background-color: blue" v-for="fav in favorites">{{ fav }}</li>
    <button @click="toggleFavorite(comic.id)">
      {{ isFavorite(comic.id) ? 'Remove from Favorites' : 'Add to Favorites' }}
    </button>
    <div class="thumbnail">
      <img
        :src="comic.thumbnail.path + '.jpg'"
        class="comic-image"
        alt="Comic Image"
      />
    </div>
    <div class="info">
      <p id="title"><span>Title</span> {{ comic.title }}</p>
      <p id="description"><span>Description</span> {{ comic.description }}</p>
      <span>Creators</span>
      <div id="creators" v-for="creator in comic.creators.items">
        {{ creator.name }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.box {
  border: 5px solid black;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.thumbnail {
  display: flex;
  align-items: center;
  justify-content: center;
}
.info {
  text-align: center;
}
.comic-image {
  width: 100%; /* Dilediğiniz genişlik değerini ayarlayın */
  height: 300px; /* Dilediğiniz yükseklik değerini ayarlayın */
  background-size: cover;
}
span {
  color: red;
  font-size: 1.4rem;
  display: block;
}
</style>
