const { Jimp } = require('jimp');

async function check() {
  const image = await Jimp.read('img/Cloud-image.png');
  console.log('Image dimensions:', image.width, 'x', image.height);
  const color = image.getPixelColor(0, 0);
  console.log('Color at 0,0:', color);
}

check().catch(console.error);
