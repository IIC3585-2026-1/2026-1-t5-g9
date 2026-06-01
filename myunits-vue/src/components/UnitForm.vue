<script setup>
defineProps({
  categories: Array,
  category: String,
  units: Array,
  value: [Number, String],
  from: String,
  to: String,
});

const emit = defineEmits([
  "update:category",
  "update:value",
  "update:from",
  "update:to",
  "swap",
  "convert",
]);
</script>

<template>
  <form class="unit-form" @submit.prevent="emit('convert')">
    <label class="field">
      <span>Categoría</span>
      <select
        :value="category"
        @change="emit('update:category', $event.target.value)"
      >
        <option
          v-for="conversionCategory in categories"
          :key="conversionCategory.id"
          :value="conversionCategory.id"
        >
          {{ conversionCategory.label }}
        </option>
      </select>
    </label>

    <label class="field">
      <span>Valor</span>
      <input
        type="number"
        step="any"
        :value="value"
        @input="emit('update:value', $event.target.value)"
      />
    </label>

    <div class="unit-row">
      <label class="field">
        <span>Desde</span>
        <select :value="from" @change="emit('update:from', $event.target.value)">
          <option v-for="unit in units" :key="unit.id" :value="unit.id">
            {{ unit.label }}
          </option>
        </select>
      </label>

      <button class="swap-button" type="button" @click="emit('swap')">
        Cambiar
      </button>

      <label class="field">
        <span>Hacia</span>
        <select :value="to" @change="emit('update:to', $event.target.value)">
          <option v-for="unit in units" :key="unit.id" :value="unit.id">
            {{ unit.label }}
          </option>
        </select>
      </label>
    </div>

    <button type="submit">Convertir</button>
  </form>
</template>
