<script setup>
import NavBar from './NavBar.vue';
</script>

<template>
  <header>
    <NavBar></NavBar>
    <section>
      <h1>Money Heist</h1>
      <div>
        <button>Play</button>
        <button>My List</button>
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
  border: 1px solid blue;
}
section {
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
}
</style>
