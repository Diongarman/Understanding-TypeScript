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
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR}

const person = {
    name: 'Dion',
    age: 100,
    hobbies: ['Sports', 'Science'],
    role: Role.AUTHOR
};


//problematic code
//person.role.push('unwanted value');
//person.role[1] = 69;

if (person.role === Role.AUTHOR) {

    console.log("is admin");
}


let favActivities: string[];

favActivities = ['sports'];

console.log(person.age);