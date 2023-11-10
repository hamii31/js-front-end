//Write a function that calculates and print the 
//value of a number raised to a given power

function solve(number, power){
  var res = numToPower(number, power, number);
  console.log(res);
}
function numToPower(number, power, powerNum){
  number *= powerNum;
  power -= 1;
  if(power == 1){
    return number;
  }
  return numToPower(number, power, powerNum);
}
solve(3, 4);
