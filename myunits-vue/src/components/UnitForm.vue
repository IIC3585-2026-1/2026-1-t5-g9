<script setup>
defineProps({
  value: Number,
  from: String,
  to: String,
});

const emit = defineEmits([
  "update:value",
  "update:from",
  "update:to",
  "convert",
]);
</script>

<template>
  <div>
    <input
      type="number"
      :value="value"
      @input="emit('update:value', Number($event.target.value))"
    />

    <select :value="from" @change="emit('update:from', $event.target.value)">
      <option value="m">Metros</option>
      <option value="km">Kilómetros</option>
      <option value="cm">Centímetros</option>
    </select>

    <select :value="to" @change="emit('update:to', $event.target.value)">
      <option value="m">Metros</option>
      <option value="km">Kilómetros</option>
      <option value="cm">Centímetros</option>
    </select>

    <button @click="emit('convert')">Convertir</button>
  </div>
</template>
