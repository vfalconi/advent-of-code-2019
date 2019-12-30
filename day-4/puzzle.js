const { input } = require('./input');

const passwordLength = (password) => {
	return (password.toString().length === 6)
}

const inRange = (password, max, min) => {
	return (password < min && password > max)
}

const hasRepeatingDigits = (password) => {
	return /(\d)\1/.test(password);
}

const increasingDigits = (password) => {
	const arrPassword = String(password).split('').map(digit => parseInt(digit, 10))
	return arrPassword.every((current, i, arr) => {
		if (i === (arr.length - 1)) {
			return true;
		} else {
			return (current <= arr[i + 1]);
		}
	});
}

const hasRepeatingDigitsStrict = (password) => {
	const pattern = /(\d)\1/g;
	const strPassword = String(password);
	const matches = [...pattern[Symbol.matchAll](strPassword)].map(v => v[0]).filter((el, pos, arr) => arr.indexOf(el) === pos);

	return matches.some(match => {
		const first = strPassword.indexOf(match);
		const last = strPassword.lastIndexOf(match);
		return first === last;
	})
}

const checkPassword = (min, max, strict = false) => {
	const possiblePasswords = [];
	for (c = min; c <= max; c++) {
		console.log(`checking password: ${c} (strict: ${strict})`);
		const tests = [
			passwordLength(c),
			inRange(c, min, max),
			(strict ? hasRepeatingDigitsStrict(c) : hasRepeatingDigits(c)),
			increasingDigits(c),
		];
		if (!tests.includes(false)) possiblePasswords.push(c);
	}
	return possiblePasswords.length;
}

module.exports = {
	input,
	passwordLength,
	inRange,
	hasRepeatingDigits,
	increasingDigits,
	hasRepeatingDigitsStrict,
	checkPassword
}
