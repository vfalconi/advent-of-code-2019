const { sample, input, moduleRequirements, totalRequirements } = require('./puzzle.js');

test('calculates module fuel requirments (sample)', () => {
	expect(moduleRequirements(sample)).toBe(34241);
});

test('calculates total fuel requirements (sample)', () => {
	expect(totalRequirements(sample)).toBe(51316);
});
