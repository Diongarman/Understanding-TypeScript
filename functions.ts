function add(n1:number, n2:number): number{
    return n1 + n2;
}

function printResult(num: number): void {
    console.log(num);
} 

//The 'void' return says that addAndHandle won't do anything with a return value given by the cb
function addAndHandle(n1: number, n2: number, cb: (a: number) =>  void){
    const result = n1 + n2;
    cb(result)
}

let combineValues: (a:number, b:number) => number;

combineValues = add;



//Callback defined actually does return a value here
addAndHandle(6, 9, (result) => {
    console.log(result);
    return result;
})

