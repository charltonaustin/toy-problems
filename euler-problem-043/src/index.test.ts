const {eulerProblem043, generateZeroToNine} = require('./index');

test('euler problem gives back the sum of all pandigital numbers', () => {
    expect(eulerProblem043()).toBe(0);
});

test('generatePandigitalNumbers returns and array of all pandigital numbers', () => {
    expect(generateZeroToNine()).toEqual([]);
});
export {}