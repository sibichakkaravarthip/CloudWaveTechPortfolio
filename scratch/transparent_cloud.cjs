const { Jimp } = require('jimp');

async function run() {
  const image = await Jimp.read('img/Cloud-image.png');
  const w = image.width;
  const h = image.height;

  // Bounding box: X [450, 1747], Y [80, 595]
  const cropX = 430;
  const cropY = 60;
  const cropW = 1338;
  const cropH = 556;

  // Clone and crop first
  const cropped = image.clone().crop({ x: cropX, y: cropY, w: cropW, h: cropH });
  const cw = cropped.width;
  const ch = cropped.height;

  // Target background color (dark blue/black in Cloud-image.png)
  const bgR = 1, bgG = 2, bgB = 29;

  for (let y = 0; y < ch; y++) {
    for (let x = 0; x < cw; x++) {
      const color = cropped.getPixelColor(x, y);
      const r = (color >> 24) & 0xff;
      const g = (color >> 16) & 0xff;
      const b = (color >> 8) & 0xff;

      const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);

      let newAlpha = 255;
      if (dist < 40) {
        newAlpha = 0;
      } else if (dist < 80) {
        const ratio = (dist - 40) / (80 - 40);
        newAlpha = Math.round(ratio * 255);
      }

      if (newAlpha < 255) {
        const newColor = (r * 0x1000000) + (g * 0x10000) + (b * 0x100) + newAlpha;
        cropped.setPixelColor(newColor, x, y);
      }
    }
  }

  // Save the transparent logo
  await cropped.write('img/Cloud-image-transparent.png');
  console.log('Saved transparent logo to img/Cloud-image-transparent.png');
}

run().catch(console.error);
