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

// // Arrow/function within objects

// const person = {
//     name: 'max',
//     age: 19,
//     greet(){
//         console.log("Hello " + this.name);
//     }
// };

// const personData = ({ name }) => {
//     console.log(name)
// }
// personData(person)

// const {name, age} = person;
// console.log(name, age)

// person.greet()

// Arrays and Array methods
// const array =['cooking', 'sports']
// const [hooby1, hobby2] = array;
// console.log(hooby1, hobby2)
// for(let hobby of array){
//     console.log(hobby)
// }
// console.log(array.map( hobby =>'Hobby: ' + hobby))
// console.log(array)

// Array, objects & Reference types
// array.push('programming')
// console.log(array)

// Spread and Rest operators
// Spread operator
// const newarray = [...array]
// console.log(newarray)

// // Rest operator

// const toArray = (...args) => {
//     return args;
// }
// console.log(toArray(1,2,3,4))


// Async code and promises

const fetchData = ()=>{
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('done');
        },1500);
    });
    return promise;
};
setTimeout(()=>{
    console.log('Done');
    fetchData()
    .then(text =>{
        console.log(text);
        return fetchData();

    })
    .then(text2 => {
        console.log(text2);
        return fetchData();
    });
}, 2000);

console.log('Hello!')
console.log('Hi!')