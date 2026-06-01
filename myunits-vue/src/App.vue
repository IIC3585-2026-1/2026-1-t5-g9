<script setup>
import { computed, ref } from "vue";

import UnitForm from "./components/UnitForm.vue";
import ResultBox from "./components/ResultBox.vue";

import { categories, getCategory } from "./data/units.js";
import { convertUnit } from "./utils/converters.js";

const selectedCategory = ref(categories[0].id);
const value = ref("");
const from = ref(categories[0].units[0].id);
const to = ref(categories[0].units[1].id);
const result = ref(null);
const error = ref("");

const currentCategory = computed(() => getCategory(selectedCategory.value));
const currentUnits = computed(() => currentCategory.value?.units ?? []);

function resetUnitsForCategory(categoryId) {
  const units = getCategory(categoryId)?.units ?? [];

  from.value = units[0]?.id ?? "";
  to.value = units[1]?.id ?? units[0]?.id ?? "";
  result.value = null;
  error.value = "";
}

function updateCategory(categoryId) {
  selectedCategory.value = categoryId;
  resetUnitsForCategory(categoryId);
}

function swapUnits() {
  const previousFrom = from.value;
  from.value = to.value;
  to.value = previousFrom;
  result.value = null;
  error.value = "";
}

function convert() {
  const numericValue = Number(value.value);
  const trimmedValue = String(value.value).trim();

  if (trimmedValue === "" || !Number.isFinite(numericValue)) {
    error.value = "Ingresa un valor numérico válido";
    result.value = null;
    return;
  }

  if (from.value === to.value) {
    error.value = "Selecciona unidades distintas";
    result.value = null;
    return;
  }

  const convertedValue = convertUnit(
    numericValue,
    from.value,
    to.value,
    selectedCategory.value,
  );

  if (!Number.isFinite(convertedValue)) {
    error.value = "Error en la conversión";
    result.value = null;
    return;
  }

  error.value = "";
  result.value = convertedValue;
}
</script>

<template>
  <main class="app-shell">
    <h1>MyUnits</h1>

    <UnitForm
      :categories="categories"
      :category="selectedCategory"
      :units="currentUnits"
      :value="value"
      :from="from"
      :to="to"
      @update:category="updateCategory"
      @update:value="value = $event"
      @update:from="from = $event"
      @update:to="to = $event"
      @swap="swapUnits"
      @convert="convert"
    />

    <ResultBox :result="result" :error="error" />
  </main>
</template>
