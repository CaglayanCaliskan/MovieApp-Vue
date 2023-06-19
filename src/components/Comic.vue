<script>
import {useStore} from 'vuex';
export default {
  name: 'Comic',
  props: {
    comic: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const store = useStore();
    const toggleFavorite = (id) => {
      store.dispatch('toggleFavorite', id);
    };
    const isFavorite = (id) => {
      return store.getters.isFavorite(id);
    };

    const handleTitle = (t) => {
      const pattern = /^(.+?)\s\((\d+)\)(.*)/;
      const match = t.match(pattern);
      if (match) {
        const result = match[1];
        return result;
      }
    };

    const handleDesc = (t) => {
      if (t == '#N/A' || t == '' || t == null) {
        return 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam alias laborum explicabo consequuntur...';
      } else {
        const limitedSentence = t.split(' ').slice(0, 15).join(' ');
        return limitedSentence + '...';
      }
    };

    const handleCreators = (t) => {
      const limitedSentence = t.split(' ').slice(0, 5).join(' ');
      return limitedSentence;
    };

    return {
      toggleFavorite,
      isFavorite,
      handleTitle,
      handleDesc,
      handleCreators,
    };
  },
};
</script>

<template>
  <div
    :class="!isFavorite(comic.id) ? 'box' : 'box fav'"
    @click="isFavorite(comic.id)"
  >
    <!-- <router-link
      :to="{name: 'ComicDetail', params: {id: comic.id}}"
      class="view-button"
    >
      <i
        class="fa-solid fa-arrow-up-right-from-square"
        style="color: #ffffff"
      ></i>
    </router-link> -->

    <div class="thumbnail">
      <img
        :src="comic.thumbnail.path + '.jpg'"
        class="comic-image"
        alt="Comic Image"
      />
    </div>
    <div class="info">
      <h2 id="title">{{ handleTitle(comic.title) }}</h2>
      <p id="description">
        {{ handleDesc(comic.description) }}
      </p>
      <h2>Creators</h2>
      <div id="creators" v-for="(creator, index) in comic.creators.items">
        <p>{{ index < 3 ? creator.name : '' }}</p>
      </div>
      <div></div>
    </div>
    <button
      :class="!isFavorite(comic.id) ? 'button' : 'button fav'"
      @click="toggleFavorite(comic.id)"
    >
      <i class="fa-sharp fa-regular fa-heart"></i>
      {{ isFavorite(comic.id) ? 'Remove from Favorites' : 'Add to Favorites' }}
    </button>
  </div>
</template>
<style scoped>
.box {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  border-radius: 15px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
}
.box.fav {
  outline: 1px solid yellow;
}
.info {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.thumbnail {
  height: 400px;
  max-width: 300px;
  margin: auto;
}
.thumbnail img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.view-button {
  position: absolute;
  right: 20px;
  top: 1rem;
  padding: 10px;
  border-radius: 5%;
  color: white;
  text-decoration: none;
}
</style>
