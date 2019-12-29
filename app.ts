function add(n1:number, n2:number): number{
    return n1 + n2;
}

function printResult(num: number): void {
    console.log(num);
} 

function addAndHandle(n1: number, n2: number, cb: (a: number) =>  void){
    const result = n1 + n2;
    cb(result)
}

let combineValues: (a:number, b:number) => number;

combineValues = add;
//below line will throw compilation error (CErr)
//combineValues = printResult;

addAndHandle(6, 9, (result) => {
    console.log(result);
})

