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

// ForEach Loop in Arrays combined with Arrow Funtion

let arr = ["ahmed", "Ali", "Hassan"]
arr.forEach((val) => {
    console.log(val.toLocaleUpperCase())
});
    

