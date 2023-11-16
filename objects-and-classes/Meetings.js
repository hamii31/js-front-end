/*Write a function that manages meeting appointments. 
The input comes as an array of strings. 
Each string contains a weekday and person’s name. 
For each successful meeting, print a message. 
If you receive the same weekday twice, the meeting cannot be 
scheduled so print a conflicting message. 
In the end, print a list of all successful meeting */

function solve(arr){
  let assocArr = {};
  for(let i = 0; i <= arr.length - 1; i++){
    var tokens = arr[i].split(' ');
    var day = tokens[0];
    var name = tokens[1];
    if(assocArr.hasOwnProperty(day)){
      console.log("Conflict on "+ day+"!");
    }
    else{
      assocArr[day] = name;
      console.log("Scheduled for "+day);
    }
  }
  for(let key in assocArr) {
    console.log(key + " -> " + assocArr[key]);
    }
}
solve(['Friday Bob',

'Saturday Ted',

'Monday Bill',

'Monday John',

'Wednesday George']);
