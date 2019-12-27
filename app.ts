const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Dion',
    age: 100,
    hobbies: ['Sports', 'Science'],
    role: [2, 'author']
};

//problematic code
person.role.push('unwanted value');
person.role[1] = 69;


let favActivities: string[];

favActivities = ['sports'];

console.log(person.age);