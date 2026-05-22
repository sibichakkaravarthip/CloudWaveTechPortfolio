const { Jimp } = require('jimp');

async function run() {
  const image = await Jimp.read('img/CWT-logo.png');
  const w = image.width;
  const h = image.height;

  // Cropping bounds detected earlier
  const cropX = 126;
  const cropY = 34;
  const cropW = 1284;
  const cropH = 801;

  // Clone and crop first
  const cropped = image.clone().crop({ x: cropX, y: cropY, w: cropW, h: cropH });
  const cw = cropped.width;
  const ch = cropped.height;

  // Target background color (dark blue/black)
  const bgR = 1, bgG = 8, bgB = 29;

  for (let y = 0; y < ch; y++) {
    for (let x = 0; x < cw; x++) {
      const color = cropped.getPixelColor(x, y);
      const r = (color >> 24) & 0xff;
      const g = (color >> 16) & 0xff;
      const b = (color >> 8) & 0xff;

      // Distance in RGB space to background
      const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);

      let newAlpha = 255;
      if (dist < 45) {
        newAlpha = 0;
      } else if (dist < 90) {
        const ratio = (dist - 45) / (90 - 45);
        newAlpha = Math.round(ratio * 255);
      }

      // If alpha is modified, write it back
      if (newAlpha < 255) {
        // Construct new color: RGBA using arithmetic
        const newColor = (r * 0x1000000) + (g * 0x10000) + (b * 0x100) + newAlpha;
        cropped.setPixelColor(newColor, x, y);
      }
    }
  }

  // Save the transparent logo
  await cropped.write('img/CWT-logo-transparent.png');
  console.log('Saved transparent logo to img/CWT-logo-transparent.png');
}

run().catch(console.error);
