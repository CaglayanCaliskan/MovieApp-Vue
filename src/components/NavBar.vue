<script setup>
import {onMounted, ref, onBeforeUnmount, computed} from 'vue';
import {useStore} from 'vuex';

const isScrolled = ref(false);
const store = useStore();

const favoriteCount = computed(() => {
  return store.getters.getFavorites.length;
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

function handleScroll() {
  isScrolled.value = window.pageYOffset > 0;
}
</script>

<template>
  <nav :class="{navbar: true, scrolled: isScrolled}">
    <div>
      <img
        src="../assets/images/netflix-logo.png"
        alt="Logo"
        class="logo-image"
      />
    </div>
    <div id="counter">
      <img
        src="../assets/images/netflix-avatar.png"
        class="logo-image"
        alt=""
      />

      <p>{{ favoriteCount > 0 ? favoriteCount : 'empty' }}</p>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  background-color: transparent;
  transition: background-color 0.3s ease;
}
nav > div {
  margin: 20px;
  width: 100px;
  height: 30px;
  display: flex;
}
.logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.scrolled {
  background-color: rgba(0, 0, 0, 0.911);
}
#counter p {
  color: yellow;
  font-size: 1.2rem;
}
</style>
