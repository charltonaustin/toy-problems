const {
    eulerProblem043,
    generatePermutations,
    swap,
    generateSubNumbers,
    checkForProperty,
    getNumber,
    sumNumbers,
} = require('./index');
export {}

test('euler problem gives back the sum of all pandigital numbers', () => {
    expect(eulerProblem043()).toBe(16695334890);
});

test('generatePermutation returns a nested array for an empty array', () => {
    expect(generatePermutations([])).toEqual([[]]);
});

test('generatePermutation returns a nested single entry for a single value', () => {
    expect(generatePermutations(["a"])).toEqual([["a"]]);
});

test('generatePermutation returns swapped arrays for two values', () => {
    expect(generatePermutations(["a", "b"])).toEqual([["a", "b"], ["b", "a"]]);
});

test('generatePermuation returns the correct length of array', () => {
    expect(generatePermutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).length).toEqual(3628800)
})

test('swap returns swaps two values', () => {
    expect(swap(["a", "b"], 0, 1)).toEqual(["b", "a"]);
});

test('swap returns values if j is too large', () => {
    expect(swap(["a"], 0, 1)).toEqual(["a"]);
});

test('swap returns values if i is too large', () => {
    expect(swap(["a"], 1, 0)).toEqual(["a"]);
});

test('generateSubNumbers returns first correct sub number', () => {
    expect(generateSubNumbers([1, 4, 0, 6, 3, 5, 7, 2, 8, 9])[0]).toEqual(406);
});

test('generateSubNumbers returns second correct sub number', () => {
    expect(generateSubNumbers([1, 4, 0, 6, 3, 5, 7, 2, 8, 9])[1]).toEqual(63);
});

test('generateSubNumbers returns last correct sub number', () => {
    expect(generateSubNumbers([1, 4, 0, 6, 3, 5, 7, 2, 8, 9])[6]).toEqual(289);
});

test('checkForProperty returns true for 1406357289', () => {
    const values = [406, 63, 635, 357, 572, 728, 289]
    expect(checkForProperty(values)).toEqual(true);
});

test('checkForProperty returns false for 1063457289', () => {
    const values = [63, 634, 345, 457, 572, 728, 289]
    expect(checkForProperty(values)).toEqual(false);
});

test('getNumber returns false for 1063457289', () => {
    expect(getNumber([1, 4, 0, 6, 3, 5, 7, 2, 8, 9])).toEqual(1406357289);
});

test('sumNumbers returns false for 1063457289', () => {
    expect(sumNumbers([1, 1, 1])).toEqual(3);
});