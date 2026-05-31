<script setup>
import { ref } from "vue";

import UnitForm from "./components/UnitForm.vue";
import ResultBox from "./components/ResultBox.vue";

import { convertLength } from "./utils/converters";

const value = ref(0);
const from = ref("m");
const to = ref("km");
const result = ref(0);

function convert() {
  result.value = convertLength(value.value, from.value, to.value);
}
</script>

<template>
  <h1>MyUnits</h1>

  <UnitForm
    :value="value"
    :from="from"
    :to="to"
    @update:value="value = $event"
    @update:from="from = $event"
    @update:to="to = $event"
    @convert="convert"
  />

  <ResultBox :result="result" />
</template>
