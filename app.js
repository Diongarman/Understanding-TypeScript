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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
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
var favActivities;
favActivities = ['sports'];
console.log(person.age);
