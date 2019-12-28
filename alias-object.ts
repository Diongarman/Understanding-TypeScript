type User = { name: string; age: number }

function greet(user: User) {
    console.log('Hi, I am ' + user.name);
  }
   
  function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
  }