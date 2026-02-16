 

//  let array = [1, 2, 3, 4, 5];
//  // Adding a new element to the array 
// //  array.push(6);

//  // Removing the last element from the array
// //  array.pop();




//  // Adding an element at the beginning of the array
//  array.unshift(0);
//  console.log(array);
 
// // remove the first element from the array
// array.shift();
//  console.log(array); 


// //   splicing an array - adding, removing, or replacing elements
// let numbers = [1, 2, 3, 4, 5];

// // Adding elements at index 2 (removing 0 elements)
// numbers.splice(2, 0, 6, 7); 
// console.log(numbers);



// //   searching and indexing 

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

// indexOf returns the index of the first occurrence of the specified element, or -1 if it is not found
// console.log(fruits.indexOf("derick"));

// lastIndexOf returns the index of the last occurrence of the specified element, or -1 if it is not found
console.log(fruits.lastIndexOf("banana")); 
// includes checks if the array contains a certain element and returns true or false
console.log(fruits.includes("date"));

//  find method returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
let foundFruit = fruits.find(fruit => fruit.startsWith("b"));
console.log(foundFruit);


//  findIndex method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
let foundIndex = fruits.findIndex(fruit => fruit.startsWith("b"));
console.log(foundIndex);


// at method returns the element at the specified index. It supports negative indexing, where -1 refers to the last element, -2 to the second last, and so on.
console.log(fruits.at(2)); // Output: "cherry"
console.log(fruits.at(-2)); // Output: "elderberry"


// const months = ["Jan", "March", "April", "June", "july"];
// // months.splice(0, 1, "february");  // Replaces 1 element at index 0
// months.splice(4, 5, "february");  // Adding and element at index 1
// // Inserts at index 1
// // console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// // months.splice(0, 1, "May");
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]