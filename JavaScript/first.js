// console.log("Let's Do it Ahmed")
// let num = prompt("Enter number here")
// if (num % 5 === 0){
//     console.log("It is a multiple of 5")
// } else {
//     console.log("Not multiple of 5")
// }
// let num = prompt("Enter you marks here")
// if (num >=80){
//     alert("your grade is A")
// }else if (70>= num <=779){
//     alert("your grade is B")
// }else{
//     alert("You are avaerage")
// }

// For-of Loop
// let fulName = "Ahmed Bin Khalid"
// let size = 0;
// for(let val of fulName){
//     console.log("val:", val);
//     size++;
// }
// alert(size)

// For-in loop
let student = {
    name : "Ahmed",
    cgpa :2.93,
    rollNo : "Fa20-BSE-062"

};
for (let key in student){
    console.log("Key:", key, "value:", student[key])
}