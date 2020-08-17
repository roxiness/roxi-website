<script>
    import * as svelte from 'svelte'
  let bg = "city.jpg";
  const bgs = ["city.jpg", "horizon.jpg", "medieval.jpg", "mountains.jpg", "painting.jpg", "pattern.png"];
  $: {
    const elem = document.getElementsByTagName("html")[0];
    elem.style["background"] = `url(/backgrounds/${bg}) no-repeat center fixed`;
    elem.style["backgroundSize"] = `cover`;
    
  }
</script>

<style>
    div {
        position: absolute; bottom: 0; right: 0;
    }
</style>

<div>
    <select bind:value={bg}>
        {#each bgs as bg}
        <option value={bg}>{bg}</option>
        {/each}
    </select>
</div>
