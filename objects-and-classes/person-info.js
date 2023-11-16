/* Write a function that receives 3 parameters, 
sets them to an object, and returns that object.

The input comes as 3 separate strings 
in the following order: firstName, lastName, age. */

function solve(fname, lname, age){

  let person = { firstName: fname, lastName: lname, age:age };

  console.log(person);

}
solve("Peter","Pan","20")
