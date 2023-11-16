/* Write a function that receives a string in JSON format and converts it to an object.

Loop through all the keys and print them with their values in format: "{key}: {value}"  */

function solve(text){
  let obj = JSON.parse(text);
  
  let entries = Object.entries(obj);
  for(let [key, value] of entries){
    console.log(key + ": " + value);
  }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}' );
