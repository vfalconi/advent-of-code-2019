const { input, runProgram, calcInputs } = require('./puzzle');

test('calculate intcode output when inputs are 12 and 2', () => {
	expect(runProgram(input, 12, 2)).toBe(9706670);
});

test('find the inputs that produce the intcode output of 19690720', () => {
	expect(calcInputs(input, 19690720)).toBe(2552);
});
