function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    const result = n1 + n2
    if (showResult) {
        console.log(phrase + result)
    } else {
        return n1 + n2;
    }
    
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const showResult = true;
let printPhrase = "The number is... "
printPhrase = 69;

const result = add(number1, number2, showResult, printPhrase);

console.log(result)