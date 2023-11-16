/*Convert the object to JSON string and print it.

Input is provided as 3 single strings in the order stated above.  */

function solve(fname, lname, hcolor){
  let person = {name:fname, lastName:lname, hairColor:hcolor};
  let text = JSON.stringify(person);
  console.log(text);
}
solve('George','Jones','Brown' );
