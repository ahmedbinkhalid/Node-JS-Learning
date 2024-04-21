// Practicing Arrays
// Find Avaerage marks of class 

let marks = [34,53,3,3,32,42,6,86,97,57,56,43];
let sum= 0;
for(let mark of marks){
    sum += mark;
}
let avg= sum / marks.length;
console.log(`Average Marks are ${avg}`);