function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var showResult = true;
var printPhrase = "The number is... ";
var result = add(number1, number2, showResult, printPhrase);
console.log(result);
