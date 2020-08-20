<script>
    import * as svelte from 'svelte'
  export let bg = "city.jpg";
  const bgs = ["city.jpg", "horizon.jpg", "medieval.jpg", "mountains.jpg", "painting.jpg", "pattern.png"];
</script>


<style>
    div {
        position: fixed; bottom: 0; right: 0;
    }
</style>

<div>
    <select bind:value={bg}>
        {#each bgs as bg}
        <option value={bg}>{bg}</option>
        {/each}
    </select>
</div>
