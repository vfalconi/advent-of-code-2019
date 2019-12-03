const { arrSum } = require('../helpers');
const { sample, input } = require('./input');

const calcFuelRequirements = (mass) => {
	return (Math.floor(mass / 3) - 2);
};

const calcTotalFuelRequirements = (mass) => {
	const totalModuleRequirements = [];
	let r = calcFuelRequirements(mass);
	while (r > 0) {
		totalModuleRequirements.push(r);
		r = calcFuelRequirements(r);
	}
	return totalModuleRequirements.reduce(arrSum);
}

const moduleRequirements = (arrMass) => {
	return arrMass.map(mass => calcFuelRequirements(mass)).reduce(arrSum);
};

const totalRequirements = (arrMass) => {
	return arrMass.map(mass => calcTotalFuelRequirements(mass)).reduce(arrSum);
};

module.exports = {
	sample,
	input,
	moduleRequirements,
	totalRequirements
};
