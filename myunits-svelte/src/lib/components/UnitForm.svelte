<script>
  import CategorySelector from "./CategorySelector.svelte";
  import { getCategory } from "../data/units.js";
  import { converter } from "../stores/converter.js";

  $: units = getCategory($converter.category)?.units ?? [];
</script>

<form class="unit-form" on:submit|preventDefault={converter.convert}>
  <CategorySelector />

  <label class="field">
    <span>Valor</span>
    <input type="number" step="any" bind:value={$converter.value} />
  </label>

  <div class="unit-row">
    <label class="field">
      <span>Desde</span>
      <select bind:value={$converter.from}>
        {#each units as unit}
          <option value={unit.id}>{unit.label}</option>
        {/each}
      </select>
    </label>

    <button class="swap-button" type="button" on:click={converter.swapUnits}>
      Cambiar
    </button>

    <label class="field">
      <span>Hacia</span>
      <select bind:value={$converter.to}>
        {#each units as unit}
          <option value={unit.id}>{unit.label}</option>
        {/each}
      </select>
    </label>
  </div>

  <button type="submit">Convertir</button>
</form>
