/*
let array = [1, 2, 3, 4, 5];
let newArray = array
    .filter(num => num % 2 === 0)
    .map(num => num * 3)
    .reduce((total, currentItem) => total * currentItem, 1);   
console.log(newArray);


function camelize (str) {
    let newStr = str
        .split("-")
        .map((valore, indice) => indice === 0 ? valore.toLowerCase() : valore.charAt(0).toUpperCase() + valore.slice(1))
        .join("");
    return newStr;
}
console.log(camelize("test-characteers"));

Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)



function filterRange(arr, a, b){
    return arr.filter(num => num >= a && num <= b);
}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);

Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]



function filterRangeInPlace (arr, a, b){
    for (let i=0; i < arr.length; i++){
        if (a > arr[i] || b < arr[i]) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
let arr = [5, 3, 8, 1];

console.log(filterRangeInPlace(arr, 1, 4)); // removed the numbers except from 1 to 4


let arr = [5, 2, 1, -10, 8];

arr.sort((a,b) => b - a);

console.log(arr ); // 8, 5, 2, 1, -10


function copySorted(array){
    return [...array].sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)


Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array [i]];
    }
    return array;
}
console.log(shuffle([3, 1, 2]));


Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

*/
function unique(arr) {
    return [...new Set(arr)];
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O

