var person = {
    name: 'Dion',
    age: 100,
    hobbies: ['Sports', 'Science'],
    role: [2, 'author']
};
//problematic code
person.role.push('unwanted value');
//person.role[1] = 69;
var favActivities;
favActivities = ['sports'];
console.log(person.age);
