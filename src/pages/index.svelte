<script>
  // import BgSwatch from "./_bgSwatch.svelte";
  let bg = "city.jpg";
</script>

<div class="splash" style="background-image: url('/backgrounds/{bg}')">
  <div class="hero">

    <h1>
      ROXI
      <div class="soon">coming soon</div>
    </h1>
    <h2>DX First Framework</h2>
    <h3 class="powered">Powered by Svelte</h3>
    <!-- <ul>
      <li>Automated routes</li>
      <li>Server side rendering - SSR</li>
      <li>Static site generator - SSG</li>
      <li>PWA & Offline first</li>
      <li>Serverless deployments</li>
      <li>Svelte | PostCSS | Markdown</li>
    </ul> -->
    <code>
      <span class="preview">Preview:</span>
      npx roxi create my-app
    </code>
  </div>
</div>

<!-- <BgSwatch bind:bg /> -->
