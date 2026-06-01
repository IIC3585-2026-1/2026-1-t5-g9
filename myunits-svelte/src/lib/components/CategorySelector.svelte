<script>
  import { categories } from "../data/units.js";
  import { converter } from "../stores/converter.js";

  let selectedCategory = "";

  $: selectedCategory = $converter.category;

  function handleCategoryChange(event) {
    converter.setCategory(event.target.value);
  }
</script>

<label class="field">
  <span>Categoría</span>
  <select bind:value={selectedCategory} on:change={handleCategoryChange}>
    {#each categories as category}
      <option value={category.id}>{category.label}</option>
    {/each}
  </select>
</label>
