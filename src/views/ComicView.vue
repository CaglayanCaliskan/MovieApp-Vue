<script setup>
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';
import {ref, watch} from 'vue';

const route = useRouter();
const store = useStore();
let comic = {};
const isLoading = ref(true);

watch(
  () => store.state.selected, // Takip edilecek state
  (data) => {
    if (data) {
      // State güncellendiğinde yapılacak işlemler
      comic = data;
      isLoading.value = false;
    }
  }
);
</script>

<template>
  <div class="container">
    <div v-if="isLoading" class="about">Loading...</div>
    <div v-else class="about">
      <div class="thumbnail">
        <img
          :src="comic.thumbnail.path + '.jpg'"
          class="comic-image"
          alt="Comic Image"
        />
      </div>
      <div class="info">
        <h2>
          <router-link to="/"
            ><i class="fa-sharp fa-solid fa-arrow-left"></i> back</router-link
          >
        </h2>
        <h1>{{ comic.title }}</h1>
        <h2>{{ comic.description }}</h2>
        <div class="creators">
          <div
            id="creators"
            v-for="(creator, index) in comic.creators.items"
            :key="index"
          >
            <p>{{ creator.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 2rem;
  height: 100vh;
  display: flex;
  overflow: hidden;
}
.info {
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.info > * {
  margin: 0;
  padding: 0;
}
a:-webkit-any-link {
  color: white !important;
  border: 1px solid white;
  border-radius: 3px;
}
</style>
