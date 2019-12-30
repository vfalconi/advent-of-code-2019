const { passwordLength, inRange, hasRepeatingDigits, increasingDigits, hasRepeatingDigitsStrict } = require('./puzzle');

test('is the password the correct length?', () => {
	expect(passwordLength(111111)).toBe(true);
	expect(passwordLength(1111)).toBe(false);
	expect(passwordLength(111111111)).toBe(false);
});

test('is the password in range?', () => {
	expect(inRange(12, 400, 1000)).toBe(false);
	expect(inRange(111111, 200000, 400000)).toBe(false);
	expect(inRange(300000, 200000, 500000)).toBe(true);
	expect(inRange(800000, 200000, 500000)).toBe(false);
});

test('does the password contain repeating digits?', () => {
	expect(hasRepeatingDigits(123456)).toBe(false);
	expect(hasRepeatingDigits(112345)).toBe(true);
	expect(hasRepeatingDigits(112222)).toBe(true);
});

test('does the password contain only increasing digits', () => {
	expect(increasingDigits(123456)).toBe(true);
	expect(increasingDigits(124381)).toBe(false);
});

test('does the password contain a pair of repeating digits that are not part of a longer series?', () => {
	expect(hasRepeatingDigitsStrict(112233)).toBe(true);
	expect(hasRepeatingDigitsStrict(123444)).toBe(false);
	expect(hasRepeatingDigitsStrict(111122)).toBe(true);
});
