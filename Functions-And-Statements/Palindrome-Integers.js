//Write a function, which receives an array of positive integers 
//and checks if each integer is a palindrome or not.

function solve(arr){
  for(let i = 0; i <= arr.length - 1; i++){
    console.log(checkIfPalindrome(arr[i]));
  }

  function checkIfPalindrome(number){

    if(number.toString().length == 1){
      return true;
    }

    var num = number.toString().split('');
    var firstHalf = [];
    var secondHalf = [];

    for(let i = 0; i <= Math.floor(num.length / 2); i ++){
      firstHalf.push(num[i]);
    }
    for(let r = num.length - 1; r >= Math.floor(num.length / 2); r--){
      secondHalf.push(num[r]);
    }
    if(num.length < 4){
      if(firstHalf[0] === secondHalf[0]){
        return true;
      }
      return false;
    }
    if(num.length >= 4){
      if(firstHalf[0] === secondHalf[0] && firstHalf[1] === secondHalf[1]){
        return true;
      }
      return false;
    }
  } 
}
solve([32, 232, 23232, 23322, 1010, 1001])
