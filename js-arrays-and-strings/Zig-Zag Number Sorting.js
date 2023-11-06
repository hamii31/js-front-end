// Exercise: Zig-Zag Sorting
//Write a function that sorts an array of numbers
//so that the first element is the smallest one, the second is the biggest one, 
//the third is the second smallest one, the fourth is the second biggest one, and so on.

function solve(arr){

  var newArr = []; // We create a new array for data storing
  
  for(let i = 0; i <= arr.length + 2; i++){ 

    // each time the loop goes around we find:

    var smallest = Math.min.apply(Math, arr); // <- the index of the smallest element
    var biggest = Math.max.apply(Math, arr); // <- the index of the biggest element
    
    newArr.push(smallest, biggest); // (we push the smallest and biggest element into the new array)

    var smallestInd = arr.indexOf(smallest); // <- the index of the smallest element
    arr.splice(smallestInd, 1); // (we remove it so it doesn't interfere with the next cycle)

    var biggestInd = arr.indexOf(biggest); // <- the index of the biggest element
    arr.splice(biggestInd, 1); // (we remove it so it doesn't interfere with the next cycle)
  }
  return newArr; // we return the new array
}
var res = solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
console.log(res);

