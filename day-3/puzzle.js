const { sample1, sample2, input} = require('./input');

const chartPaths = (paths) => {
	const coords = Array.from({ length: paths.length}, _ => new Set());

	paths.forEach((path, i) => {
		const pointer = { x: 0, y: 0 };
		path.forEach(instruction => {
			const direction = instruction.substr(0,1);
			const change = parseInt(instruction.slice(1), 10);
			for (let c = 1; c <= change; c++) {
				if (direction === 'U') pointer.y += -1;
				if (direction === 'R') pointer.x += 1;
				if (direction === 'D') pointer.y += 1;
				if (direction === 'L') pointer.x += -1;

				coords[i].add(`${pointer.x},${pointer.y}`);
			}
		});
	});

	return coords;
}

const findIntersections = (pathA, pathB) => {
	const intersections = new Set();
	pathB.forEach(coords => {
		if (pathA.has(coords)) intersections.add(coords);
	});
	return intersections;
}

const findClosestIntersection = (paths) => {
	const chartedPaths = chartPaths(paths);
	const intersections = findIntersections(...chartedPaths);

	const closest = Array.from(intersections).map(coords => {
		const [ x, y ] = coords.split(',').map(n => parseInt(n, 10));
		const distance = Math.abs(x) + Math.abs(y);
		return distance
	});

	return Math.min(...closest);
}

const findOptimalIntersectionSteps = (paths) => {
	const pathPoints = chartPaths(paths);
	const intersections = findIntersections(pathPoints[0], pathPoints[1]);
	const intersectionSteps = {};
	let steps = null;

	intersections.forEach(intersection => {
		// i have no idea why, but apparently i have an off by 2 problem???
		intersectionSteps[intersection] = 2;
		pathPoints.forEach(points => {
			points = Array.from(points);
			for (c = 0; c < points.length; c++) {
				if (points[c] === intersection) {
					intersectionSteps[intersection] += c;
					break;
				}
			}
		});
	});

	Object.keys(intersectionSteps).forEach(intersection => {
		const currentSteps = intersectionSteps[intersection];
		if (steps === null) steps = currentSteps;
		if (steps > currentSteps) steps = currentSteps;
	});

	return steps;
}

// answer is 15622... but why? (figured it out because one wrong guess was too low, and another wrong guess was too high, and the difference between the guesses was 2...i'll take it.)

module.exports = {
	sample1,
	sample2,
	findClosestIntersection,
	findOptimalIntersectionSteps
}
