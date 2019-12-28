function add(n1:number, n2:number): number{
    return n1 + n2;
}

function printResult(num: number): void {
    console.log(num);
} 

//printResult(add(11,58))


let combineValues: Function;

combineValues = add;
//below line will throw compilation error (CErr)
//combineValues = 5;

//line below will throw a CErr though as combineValue can be cast to any 'Function' type

console.log(printResult(add(11,58)));

