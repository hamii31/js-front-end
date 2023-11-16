/*Write a function that stores information about a person’s name and his address. 
The input comes as an array of strings. 
Each string contains the name and the address separated by a colon. 
If you receive the same name twice just replace the address. 
In the end, print the full list, sorted alphabetically by the person’s name.*/

function solve(arr){
  let assocArr = {};

  for(let i = 0; i <= arr.length - 1; i++){
    var tokens = arr[i].split(":");
    var name = tokens[0];
    var address = tokens[1];
    assocArr[name] = address
  }

  let entries = Object.entries(assocArr);
  entries.sort((a, b) => a[0].localeCompare(b[0]));

  for(let [key, value] of entries){
    console.log(key + " -> " + value);
  }
}
solve(['Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'] );
