<script>
  import {
    TonalPalette,
    argbFromHex,
    hexFromArgb
  } from '@material/material-color-utilities';

  let materialPalette = [];
  let chromaPalette = [];
  let shadesPalette = [];
  let swatchesPalette = [];

  const handleChangeColor = event => {
    const hexColor = event.target.value;
    materialPalette = generateMaterialPalette(hexColor);
    chromaPalette = generateChromaJsPalette(hexColor);
    shadesPalette = generatePaletteFromShades(hexColor);
    swatchesPalette = getSwatches(hexColor);
  };

  function getSwatches(hexColor) {
    let primaryColor = chroma(hexColor);
    // Define the range of saturation and lightness values for the color swatches
    const lightnessRange = [0.12, 0.96];
    const numSwatches = 10;

    // Generate the swatches
    const swatches = [];
    for (let i = 0; i < numSwatches; i++) {
      const saturation = (primaryColor.get('hsl.s') * (i + 1)) / numSwatches;
      const lightness =
        lightnessRange[0] +
        ((lightnessRange[1] - lightnessRange[0]) * i) / (numSwatches - 1);
      const swatch = primaryColor
        .set('hsl.s', saturation)
        .set('hsl.l', lightness);
      swatches.push(swatch);
    }

    // Apply contrast rules
    for (let i = 1; i < swatches.length; i++) {
      const prevSwatch = swatches[i - 1];
      const currSwatch = swatches[i];
      const contrastRatio = chroma.contrast(prevSwatch, currSwatch);
      if (contrastRatio < 4.5) {
        const lightnessDiff =
          (4.5 * prevSwatch.get('hsl.l') - currSwatch.get('hsl.l') * 3.5) / 1.5;
        const newLightness = Math.min(
          Math.max(lightnessDiff, lightnessRange[0]),
          lightnessRange[1]
        );
        swatches[i] = currSwatch.set('hsl.l', newLightness);
      }
    }
    return addContrast(swatches.map(s => s.hex()));
  }

  function generateMaterialPalette(hex) {
    const argb = argbFromHex(hex);
    const colors = [];
    const tones = [95, 90, 80, 70, 60, 50, 40, 35, 30, 25, 20];
    tones.forEach(t => {
      const current = TonalPalette.fromInt(argb).tone(t);
      const hex = hexFromArgb(current);
      colors.push(hex);
    });
    return addContrast(colors);
  }

  function generateChromaJsPalette(hex) {
    const colorPalette = chroma
      .scale([chroma(hex).darken(2), hex, '#fff'])
      .mode('lch')
      .colors(10);

    return addContrast(colorPalette.reverse());
  }

  function generatePaletteFromShades(baseColor) {
    const colors = [];

    // Define the shades to generate
    const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

    shades.forEach(shade => {
      const value = chroma(baseColor)
        .darken(shade / 100)
        .hex();
      colors.push(value);
    });
    return addContrast(colors);
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

    <div class="col">
      <h2>Shades palette</h2>
      {#each shadesPalette as color}
        <div
          class="color-item"
          style="background-color: {color.color}; color: {color.contrast}"
        >
          {color.color}
        </div>
      {/each}
    </div>

    <div class="col">
      <h2>Swatches palette</h2>
      {#each swatchesPalette as color}
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
