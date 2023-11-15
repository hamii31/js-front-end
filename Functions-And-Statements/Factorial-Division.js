/* Write a function that receives two integer numbers. 
Calculate the factorial of each number. 
Divide the first result by the second and print the division 
formatted to the second decimal point. */

function solve(n1, n2){

  var f1 = factorial(1, n1, n1 - 1);
  var f2 = factorial(1, n2, n2 - 1);

  console.log(Math.abs(f1/f2).toFixed(2));

  function factorial(f, x, n){
    
    f *= (x - n);

    if(n == 0){
      return f;
    }
    return factorial(f, x, n - 1);

  }
}
solve(6, 2);
