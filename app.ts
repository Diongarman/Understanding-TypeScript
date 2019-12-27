// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Dion',
//     age: 100,
//     hobbies: ['Sports', 'Science'],
//     role: [2, 'author']
// };

//global constants
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person = {
    name: 'Dion',
    age: 100,
    hobbies: ['Sports', 'Science'],
    role: ADMIN
};


//problematic code
//person.role.push('unwanted value');
//person.role[1] = 69;

if (person.role === ADMIN) {

    console.log("is admin");
}


let favActivities: string[];

favActivities = ['sports'];

console.log(person.age);