function eulerProblem043(): number {
    const permutations = generatePermutations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    const sumArray: number[] = []
    for (let i = 0; i < permutations.length; i++) {
        const subNumbers = generateSubNumbers(permutations[i])
        if (checkForProperty(subNumbers)) {
            sumArray.push(getNumber(permutations[i]))
        }
    }
    return sumNumbers(sumArray)
}

function getNumber(permutation: number[]) {
    let numberString = ""

    for (let j = 0; j < permutation.length; j++) {
        if (j == 0 && permutation[j] == 0) {
            // do nothing
        } else {
            numberString += Number(permutation[j]).toString()
        }
    }
    return Number(numberString).valueOf();
}

function sumNumbers(sumArray: number[]) {
    let sum = 0
    for (let i = 0; i < sumArray.length; i++) {
        sum += sumArray[i]
    }
    return sum;
}

function checkForProperty(pandigitalSubNumbers: number[]) {
    if (pandigitalSubNumbers.length != 7) {
        return false
    }
    const primes = [2, 3, 5, 7, 11, 13, 17]
    for (let i = 0; i < pandigitalSubNumbers.length; i++) {
        if (pandigitalSubNumbers[i] % primes[i] != 0) {
            return false
        }
    }
    return true
}

function generateSubNumbers(values: number[]) {
    if (values.length != 10) {
        throw "length of values array should be 10"
    }
    const subNumbers: number[] = []
    for (let i = 1; i < 8; i++) {
        const iString = Number(values[i]).toString()
        const jString = Number(values[i + 1]).toString()
        const kString = Number(values[i + 2]).toString()
        if (iString == "0") {
            subNumbers.push(Number(jString + kString).valueOf())
        } else {
            subNumbers.push(Number(iString + jString + kString))
        }
    }
    return subNumbers
}

function swap<T>(array: T[], i: number, j: number): T[] {
    if (i >= array.length || j >= array.length) {
        return array
    }

    const newArray: T[] = []
    for (let k = 0; k < array.length; k++) {
        if (k == i) {
            newArray.push(array[j])
        } else if (k == j) {
            newArray.push(array[i])
        } else {
            newArray.push(array[k])
        }
    }
    return newArray
}

function generatePermutations<T>(values: T[]): T[][] {
    const returnArray: T[][] = []
    const stack: number[] = []
    for (let i = 0; i < values.length; i++) {
        stack.push(0)
    }
    const newArray: T[] = []
    for (let i = 0; i < values.length; i++) {
        newArray.push(values[i])
    }

    returnArray.push(newArray)

    let i = 1;
    while (i < values.length) {
        if (stack[i] < i) {
            if (i % 2 == 0) {
                values = swap(values, 0, i)
            } else {
                values = swap(values, stack[i], i)
            }
            returnArray.push(values)
            stack[i] += 1
            i = 1
        } else {
            stack[i] = 0
            i += 1
        }
    }
    return returnArray
}

module.exports = {
    eulerProblem043,
    generatePermutations,
    swap,
    generateSubNumbers,
    checkForProperty,
    getNumber,
    sumNumbers
}