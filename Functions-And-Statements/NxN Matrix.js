//Write a function that receives a single integer number n 
//and prints nxn matrix with that number.

function solve(number){
  var cols = number;
  while(true){
    var rows = "";
    if(cols == 0){
      break;
    }
    for(let row = 0; row <= number - 1; row ++){
      rows += number + " ";
    }
    console.log(rows);
    cols--;
  }
}
solve(7);
