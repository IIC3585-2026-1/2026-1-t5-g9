<script setup>
defineProps({
  result: Number,
  error: String,
});
</script>

<template>
  <section class="result-box" :class="{ error: error }">
    <h2 v-if="error">{{ error }}</h2>
    <h2 v-else-if="result !== null">Resultado: {{ result }}</h2>
    <h2 v-else>Resultado pendiente</h2>
  </section>
</template>
