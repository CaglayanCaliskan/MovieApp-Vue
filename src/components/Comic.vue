<script>
export default {
  props: {
    comic: {
      type: Object,
      required: true,
    },
  },
  // watch: {
  //   comic: {
  //     immediate: true,
  //     handler(newComic) {
  //       console.log(newComic);
  //     },
  //   },
  // },
};
</script>
<template>
  <div class="box">
    <div class="thumbnail">
      <img
        :src="comic.thumbnail.path + '.jpg'"
        class="comic-image"
        alt="Comic Image"
      />
    </div>
    <div class="info">
      <p id="title">Title: {{ comic.title }}</p>
      <p id="description">Description: {{ comic.description }}</p>
      <p>Creators:</p>
      <div id="creators" v-for="creator in comic.creators.items">
        {{ creator.name }}
      </div>
    </div>
  </div>
</template>
<style scoped>
.box {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
}
.thumbnail {
  display: flex;
  align-items: center;
  justify-content: center;
}
.comic-image {
  width: 200px; /* Dilediğiniz genişlik değerini ayarlayın */
  height: 300px; /* Dilediğiniz yükseklik değerini ayarlayın */
}
</style>
