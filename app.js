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
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var person = {
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
var favActivities;
favActivities = ['sports'];
console.log(person.age);
