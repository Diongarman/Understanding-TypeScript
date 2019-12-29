function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combineValues;
combineValues = add;
//below line will throw compilation error (CErr)
//combineValues = printResult;
addAndHandle(6, 9, function (result) {
    console.log(result);
    return result;
});
