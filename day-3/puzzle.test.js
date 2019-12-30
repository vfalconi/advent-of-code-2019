const { sample1, sample2, findClosestIntersection, findOptimalIntersectionSteps } = require('./puzzle');

test('find closest intersection for sample 1', () => {
	expect(findClosestIntersection(sample1)).toBe(159);
});

test('find closest intersection for sample 2', () => {
	expect(findClosestIntersection(sample2)).toBe(135);
});

test('find the intersection with the fewest steps necessary (sample1)', () => {
	expect(findOptimalIntersectionSteps(sample1)).toBe(610);
});

test('find the intersection with the fewest steps necessary (sample2)', () => {
	expect(findOptimalIntersectionSteps(sample2)).toBe(410);
});
