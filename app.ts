const person = {
    name: 'Dion',
    age: 100,
    hobbies: ['Sports', 'Science'],
    role: [2, 'author']
};


person.role.push('unwanted value');
person.role[1] = 69;
let favActivities: string[];

favActivities = ['sports'];

console.log(person.age);