const { input, sample } = require('./input');

const makeLayers = (pixels, width, height) => {
	const layerArea = width * height;
	const layers = [];
	while (pixels.length > 0) {
		const layer = [];
		let layerPixels = pixels.slice(0, layerArea);

		while (layerPixels.length > 0) {
			const row = layerPixels.slice(0, width).split('');
			layer.push(row);
			layerPixels = layerPixels.slice(width);
		}

		layers.push(layer);
		pixels = pixels.slice(layerArea);
	}

	return layers;
}

const verifyMessage = (pixels, width, height) => {
	const layerWithFewestZeroes = makeLayers(pixels, width, height).reduce((fewestZeroes, currentLayer) => {

		const p = (fewestZeroes.map(i => i.join('')).join('').match(/0/g) || []).length;
		const v = (currentLayer.map(i => i.join('')).join('').match(/0/g) || []).length;

		return (p < v ? fewestZeroes : currentLayer);
	});
	const combinedLayer = layerWithFewestZeroes.join('');
	const onesCount = (combinedLayer.match(/1/g) || []).length;
	const twosCount = (combinedLayer.match(/2/g) || []).length;
	return onesCount * twosCount;
}

const composeImage = (pixels, width, height) => {
	const image = Array.from({ length: height }, (_, i) => {
		return Array.from({ length: width }, (_,i) => '.');
	});
	const layers = makeLayers(pixels, width, height);

	layers.forEach((layer, layerNum) => {
		layer.forEach((row, rowNum) => {
			row.forEach((digit, colNum) => {
				if (image[rowNum][colNum] === '.' || image[rowNum][colNum] === '2') image[rowNum][colNum] = digit;
			});
		});
	});

	return image.map(i => i.join(''));
}

const getPassword = (pixels, width, height) => {
	composeImage(pixels, width, height).forEach(row => {
		console.log(row.replace(/0/g, '░').replace(/1/g, '█'));
	});
}

module.exports = {
	input,
	makeLayers,
	verifyMessage,
	composeImage
}
