function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(num);
}
//printResult(add(11,58))
var combineValues;
combineValues = add;
//below line will throw compilation error 
//combineValues = 5;
console.log(printResult(add(11, 58)));
