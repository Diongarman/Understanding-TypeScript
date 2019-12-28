function combine(
    input1: number | string, 
    input2: number | string,
    resultConversion: 'as-number' | 'as-text'
    ) {
    let result;

    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        //+ prefixes enforce type coercion
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString()
    }
    return result;
}


const combineAges = combine(12,13, 'as-number');
console.log(combineAges);

const combineStringAges = combine(30,19, 'as-number');
console.log(combineStringAges);

const combineNames = combine('Daniel', 'Hernandez', 'as-string');
console.log(combineNames);