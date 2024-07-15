// // Writing First Function
// function myfunction(){
//     console.log("Hello World!");
//     console.log("I am a function");
// }
// // Calling the Function
// myfunction();

// // Two Numbers Sum -> Function

// function myfunction(a,b){
//     console.log(a+b);
// }

// myfunction(2, 5)  ;

// Arrow Functions
// const sum =(a , b) => {
//     console.log(a + b);
// }
// sum(4,9)

// Practice Question -> Extract Vowels from String Through Funtions
// let count = 0;
// function myfunction(str){
//     for(vw of str){
//         if(vw == "a" || vw == "e" || vw == "i" || vw == "o" || vw == "u" ){
//             console.log(vw)
//             count++;
//         }
        
//     }
//     console.log("Total Number of Vowels are:", count)
//     console.log("The String You Entered Was:", str)
// }
// myfunction(prompt("Enter  any string"));

// // Practice Question -> Extract Vowels from String Using Arrow Functions
// let count = 0;
// const vowels = (str) => {
//     for(vw of str){
//         if(vw == "a" || vw == "e" || vw == "i" || vw == "o" || vw == "u" ){
//             console.log(vw)
//             count++;
//         }
        
//     }
//     console.log("Total Number of Vowels are:", count)
//     console.log("The String You Entered Was:", str)
// }
//  vowels(prompt("Enter  any string"));

// // ForEach Loop in Arrays combined with Arrow Function

// let arr = ["ahmed", "Ali", "Hassan"]
// arr.forEach((val) => {
//     console.log(val.toLocaleUpperCase())
// });

// // Question -> Print Square of each value in array using forEach Loop

// let arr = [1,2,3,4,5]
// arr.forEach((num)=>{
//     console.log("The Number was:", num, `The Square of ${num} is :`, num*num)
// })

// // Question -> Print Square of each value in array using forEach Loop Optimized

// let arr = [1,2,3,4,5,6]
// let square = (num)=>{
//     console.log("The Number was:", num, `The Square of ${num} is :`, num*num)
// }
// arr.forEach(square)

// Maps in Javascript

// let arr = [1,2,3,4,5,6]
// let newArr = arr.map((val) => {
//     return val * val
// });
// console.log(newArr)

// Filter in javascript

// let arr = [1,2,3,4,5,6,7,8]

// let evenArr = arr.filter((val)=>{
//     return val % 2 === 0; 
// });
// console.log(evenArr)

// Reduce Function in javascript

// let arr = [1,2,3,4,5]
// let newArr = arr.reduce((res, curr)=>{
//     return res + curr
// });
// console.log(newArr)

// let arr = [1,2,3,4,5]
// let newArr = arr.reduce((prev, curr)=> {
//     return prev > curr ? prev : curr;
// });
// console.log(newArr)


// Practive Questions
// let marks = [43,90,95,89,93,95]
// const greatGrade = marks.filter((val)=>{
//     return val > 90
// });
// console.log(greatGrade)
let max = prompt("enter any number")
let nums = [];
for(i=1; i<=max; i++){
    nums.push(i);
}
let sumAll = nums.reduce((prev, curr)=>{
    return prev + curr
});

let productAll = nums.reduce((prev, curr)=>{
    return prev * curr
});
console.log(`The complete array is ${nums}`)
console.log(sumAll)
console.log(productAll)



