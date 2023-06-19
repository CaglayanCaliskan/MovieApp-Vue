<script setup>
import NavBar from './NavBar.vue';
import {useStore} from 'vuex';
import {computed, defineProps} from 'vue';

const props = defineProps({
  comicsList: {
    type: Array,
  },
});

const store = useStore();
const isMenuOpen = computed(() => {
  return store.state.menu;
});

const toggleMenu = () => {
  store.dispatch('toggleMenu');
};
const menuClass = computed(() => {
  return isMenuOpen.value ? 'menu active' : 'menu';
});

const isFavorite = (id) => {
  return store.getters.isFavorite(id);
};

const toggleFavorite = (id) => {
  store.dispatch('toggleFavorite', id);
};

const handleTitle = (t) => {
  const pattern = /^(.+?)\s\((\d+)\)(.*)/;
  const match = t.match(pattern);
  if (match) {
    const result = match[1];
    return result;
  }
};
</script>

<template>
  <header>
    <NavBar :toggleMenu="toggleMenu"></NavBar>
    <div :class="menuClass">
      <div v-if="isMenuOpen"><h2>Favorites</h2></div>
      <div class="menuItems" v-for="comic in comicsList" :key="comic.id">
        <li v-if="isFavorite(comic.id)">
          <p>{{ handleTitle(comic.title) }}</p>
          <i
            class="fa-solid fa-xmark"
            style="color: #ff0000"
            @click="toggleFavorite(comic.id)"
          ></i>
        </li>
      </div>
    </div>

    <section>
      <h1>Money Heist</h1>
      <div>
        <button class="link-button">Play</button>
        <button class="link-button" @click="toggleMenu">My List</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
        repudiandae, dicta quam quaerat tempora facere.
      </p>
    </section>
  </header>
</template>

<style scoped>
header {
  height: 400px;
  background-image: url('../assets/images/banner.jpg');
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
section {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
}
.menu {
  background-color: #444141;
  width: 380px;
  height: 600px;
  position: fixed;
  z-index: 20;
  right: 0;
  top: 80px;
  transform: translateX(380px);
  transition: 0.3s all ease-in;
  display: block;
  padding: 1rem;
  border-radius: 5%;
}
.menu.active {
  transform: translateX(-15px);
  display: block;
}
.menuItems {
  margin: 2rem 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
li i {
  cursor: pointer;
  padding: 3px;
}
li i:hover {
  border: 1px solid red;
  border-radius: 100%;
}
</style>
