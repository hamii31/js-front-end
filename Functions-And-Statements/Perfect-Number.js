/* Write a function that receives a number and 
checks if that number is perfect or NOT.

A perfect number is a positive integer that is 
equal to the sum of its proper positive divisors. 
That is the sum of its positive divisors excluding 
the number itself (also known as its aliquot sum).  */

function solve(number){
  var sum = 0;
  for(let i = 0; i < number; i++){
    if(number % i == 0){
      sum += i;
    }
  }
  if(sum === number){
    console.log("We have a perfect number!")
  }
  else{
    console.log("It's not so perfect.")
  }
}
solve(28) //  1 + 2 + 4 + 7 + 14 = 28
