<script setup></script>

<template>
  <h1>NETFLIX ORIGINALS</h1>
  <section>
    <div class="card">1</div>
    <div class="card">2</div>
    <div class="card">3</div>
    <div class="card">4</div>
    <div class="card">5</div>
    <div class="card">6</div>
  </section>
</template>

<style scoped>
section {
  display: grid;
  place-items: center;
  grid-template-columns: auto auto auto auto;
  gap: 2rem;
}
section .card {
  border: 1px solid pink;
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
