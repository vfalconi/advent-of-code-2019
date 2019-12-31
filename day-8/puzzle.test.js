const { input, makeLayers, verifyMessage, composeImage } = require('./puzzle');

test('break digits down into rows of n-length', () => {
	expect(makeLayers('123456789012', 3, 2)).toEqual([ [ ['1','2','3'], ['4','5','6'] ], [ ['7','8','9'], ['0','1','2'] ] ]);
	expect(makeLayers('0222112222120000', 2, 2)).toEqual([ [ ['0', '2'], ['2', '2'] ], [ ['1', '1'], ['2', '2'] ], [ ['2', '2'], ['1', '2'] ], [ ['0', '0'], ['0', '0'] ] ]);
})

test('get product of the number of ones and the number of twos in the layer with the fewest zeroes', () => {
	expect(verifyMessage(input.pixels, input.width, input.height)).toBe(2210);
});

test('flatten layers, with 0 being black, 1 being white, and 2 being transparent', () => {
	expect(composeImage('0222112222120000', 2, 2)).toEqual([ '01', '10' ]);
})
