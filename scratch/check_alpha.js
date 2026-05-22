const { Jimp } = require('jimp');

async function check() {
  const image = await Jimp.read('img/CWT-logo.png');
  const pixelColor = image.getPixelColor(0, 0);
  const rgba = Jimp.intToRGBA(pixelColor);
  console.log('Top-left pixel RGBA:', rgba);
}

check().catch(console.error);
