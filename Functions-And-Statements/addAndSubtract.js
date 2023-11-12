//Write a function sum() to calculate the sum of the first two integers 
//and a function subtract(), which subtracts the result of the function
//the sum() and the third integer

function sum(a, b, c){
  var sum = a + b;
  console.log(subtract(sum, c));

  function subtract(sum, c){
    return sum - c;
  }
}

sum(3,5,2)
