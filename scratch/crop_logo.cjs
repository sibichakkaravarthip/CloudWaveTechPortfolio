const { Jimp } = require('jimp');

async function run() {
  const image = await Jimp.read('img/Cloud-image.png');
  const w = image.width;
  const h = image.height;

  let minX = w, maxX = 0, minY = h, maxY = 0;

  // Background color is approximately 0x01021d
  const bgR = 1, bgG = 2, bgB = 29;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const color = image.getPixelColor(x, y);
      const r = (color >> 24) & 0xff;
      const g = (color >> 16) & 0xff;
      const b = (color >> 8) & 0xff;

      const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);

      if (dist > 35) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  console.log(`Bounding box: X [${minX}, ${maxX}], Y [${minY}, ${maxY}]`);
  console.log(`Width: ${maxX - minX + 1}, Height: ${maxY - minY + 1}`);

  const pad = 20;
  const cropX = Math.max(0, minX - pad);
  const cropY = Math.max(0, minY - pad);
  const cropW = Math.min(w - cropX, maxX - minX + 1 + pad * 2);
  const cropH = Math.min(h - cropY, maxY - minY + 1 + pad * 2);

  const cropped = image.clone().crop({ x: cropX, y: cropY, w: cropW, h: cropH });
  await cropped.write('img/Cloud-image-cropped.png');
  console.log('Saved cropped cloud image to img/Cloud-image-cropped.png');
}

run().catch(console.error);
