<!-- src/App.vue -->
<template>
  <div>
    <h1>Remote Vite + Vue app</h1>
    <Card
      title="Hello World"
      description="This is a my description passed as a prop."
    />
  </div>
</template>

<script setup>
import Card from "./components/Card.vue";
</script>
