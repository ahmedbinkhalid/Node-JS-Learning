// // Arrow function

// const userNamed = 'Ahmed';
// let age = 22;
// const hasHobbies = true;
// const sumerizeUser = (userName, userAge, userHobby) => {
//     return (
//         "Name is " + userName + ", Age is " + userAge + ", Has hobbies " + userHobby
//     );

// }
// const add = (a,b) =>{
// return a+b 
// };

// const addone = a => a +1 ;
// const addrandom = () => 1+2;

// console.log(add(1, 2))
// console.log(addone(1))
// console.log(addrandom())
// console.log(sumerizeUser(userNamed, age, hasHobbies))

// Arrow/function within objects

const person = {
    name: 'max',
    age: 19,
    greet(){
        console.log("Hello " + this.name);
    }
};

person.greet()