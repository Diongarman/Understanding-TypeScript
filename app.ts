function add(n1:number, n2:number): number{
    return n1 + n2;
}

function printResult(num: number): void {
    console.log(num);
} 

//printResult(add(11,58))


let combineValues;

combineValues = add;
combineValues = 5;

console.log(printResult(add(11,58)));

