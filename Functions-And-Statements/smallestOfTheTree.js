//Write a function that receives three integers and prints the smallest number. 
//Use an appropriate name for the function

function solve(numA, numB, numC){
  var arr = [numA, numB, numC];
  var smallest = smallestOfTheThree(arr);
  console.log(smallest);
}
function smallestOfTheThree(arr){
  var x = Number.MAX_VALUE;
  for(let i = 0; i <= arr.length - 1; i++){
    if(arr[i] < x){
      x = arr[i];
    }
  }
  return x;
}
solve(3,5,2);
