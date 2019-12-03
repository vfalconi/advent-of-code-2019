const { input } = require('./input');

const calcOverwrite = (opcode, a, b) => {
	if (opcode === 1) return a + b;
	if (opcode === 2) return a * b;
	return false;
}

const updateMemory = (memory, pointer) => {
	const opcode = memory[pointer];
	const posA = memory[pointer + 1];
	const posB = memory[pointer + 2];
	const posOverwrite = memory[pointer + 3];
	const overwriteValue = calcOverwrite(opcode, memory[posA], memory[posB]);

	memory[posOverwrite] = overwriteValue;

	return memory;
}

const walkThrough = (memory, pointer = 0, step = 4) => {
	while (pointer <= (memory.length - step) && memory[pointer] !== 99) {
		arr = updateMemory(memory, pointer);
		pointer += step;
	};
	return memory;
}

const runProgram = (memory, addr1, addr2) => {
	const memoryCopy = [...memory];
	memoryCopy[1] = addr1;
	memoryCopy[2] = addr2;
	return walkThrough(memoryCopy)[0];
}

const calcInputs = (memory, targetOutput) => {
	for (noun = 0; noun < 100; noun++) {
		for (verb = 0; verb < 100; verb++) {
			const output = runProgram(memory, noun, verb);
			if (output === targetOutput) {
				return 100 * noun + verb;
			}
		}
	}
	return false;
}

module.exports = {
	input,
	runProgram,
	calcInputs
}
