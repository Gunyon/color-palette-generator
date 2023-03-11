<script>
  import {
    TonalPalette,
    argbFromHex,
    hexFromArgb
  } from '@material/material-color-utilities';

  let materialPalette = [];
  let chromaPalette = [];

  const handleChangeColor = event => {
    const hexColor = event.target.value;
    materialPalette = generateMaterialPalette(hexColor);
    chromaPalette = generateChromaJsPalette(hexColor);
  };

  function generateMaterialPalette(hex) {
    const argb = argbFromHex(hex);
    const colors = [];
    const tones = [95, 90, 80, 70, 60, 50, 40, 35, 30, 25, 20];
    tones.forEach(t => {
      const current = TonalPalette.fromInt(argb).tone(t);
      const hex = hexFromArgb(current);
      colors.push(hex);
    });
    // for (let i = 100; i >= 30; i = i - 7) {
    //   const current = TonalPalette.fromInt(argb).tone(i);
    //   const hex = hexFromArgb(current);
    //   colors.push(hex);
    // }
    return addContrast(colors);
  }

  function generateChromaJsPalette(hex) {
    const colorPalette = chroma
      .scale([chroma(hex).darken(2), hex, '#fff'])
      .mode('lch')
      .colors(10);

    return addContrast(colorPalette.reverse());
  }

  function addContrast(colors) {
    return colors.map(c => {
      const contrast = getContrastColor(c);
      return { color: c, contrast };
    });
  }

  function getContrastColor(hex) {
    return chroma.contrast(hex, '#fff') > chroma.contrast(hex, '#000')
      ? '#fff'
      : '#000';
  }
</script>

<main>
  <input type="color" on:change={handleChangeColor} />

  <div class="row">
    <div class="col">
      <h2>Material palette</h2>
      {#each materialPalette as color}
        <div
          class="color-item"
          style="background-color: {color.color}; color: {color.contrast}"
        >
          {color.color}
        </div>
      {/each}
    </div>
    <div class="col">
      <h2>Chroma palette</h2>
      {#each chromaPalette as color}
        <div
          class="color-item"
          style="background-color: {color.color}; color: {color.contrast}"
        >
          {color.color}
        </div>
      {/each}
    </div>
  </div>
</main>

<style>
  main {
    padding: 30px;
  }

  .color-item {
    width: 300px;
    padding: 10px;
  }

  .row {
    display: flex;
  }
</style>
