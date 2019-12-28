function combine(input1: number | string, input2: number | string) {
    const result = input1 + input2;
    return result;
}


const combineAges = combine(12,13);
console.log(combineAges);

const combineNames = combine('Daniel', 'Hernandez');
console.log(combineNames);