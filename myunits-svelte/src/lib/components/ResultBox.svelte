<script>
  import { fade } from "svelte/transition";
  import { converter } from "../stores/converter.js";
</script>

<section class:error={$converter.error} class="result-box">
  {#if $converter.error}
    <h2>{$converter.error}</h2>
  {:else if $converter.result !== null}
    <h2 transition:fade>Resultado: {$converter.result}</h2>
  {:else}
    <h2>Resultado pendiente</h2>
  {/if}
</section>
