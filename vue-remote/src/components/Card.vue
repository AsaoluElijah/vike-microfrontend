<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.container {
  padding: 16px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.title {
  font-size: 24px;
  color: #333;
  margin-bottom: 8px;
}

.description {
  font-size: 16px;
  color: #666;
}
</style>
