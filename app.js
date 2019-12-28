function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        //+ prefixes enforce type coercion
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(12, 13, 'as-number');
console.log(combineAges);
var combineStringAges = combine(30, 19, 'as-number');
console.log(combineStringAges);
var combineNames = combine('Daniel', 'Hernandez', 'as-text');
console.log(combineNames);
