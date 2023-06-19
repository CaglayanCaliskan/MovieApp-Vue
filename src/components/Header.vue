<script setup>
import NavBar from './NavBar.vue';
import {useStore} from 'vuex';

const store = useStore();
</script>

<template>
  <header>
    <NavBar></NavBar>
    <section>
      <h1>Money Heist</h1>
      <div>
        <button class="link-button">Play</button>
        <button
          class="link-button"
          @click="console.log(store.getters.getFavorites)"
        >
          My List
        </button>
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
}
section {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
}
</style>
