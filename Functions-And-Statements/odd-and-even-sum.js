//You will receive a single number. You have to write a function, 
//that returns the sum of all even and all odd digits from that number. 

function solve(num){

  var digits = num.toString().split('');

  var oddSum = 0;
  var evenSum = 0;

  for(let i = 0; i <= digits.length - 1; i++){
    if(digits[i] % 2 == 0){
      evenSum += parseInt(digits[i]);
    }
    else{
      oddSum += parseInt(digits[i]);
    }
  }
  console.log("Odd sum = " + oddSum + ", Even sum = " + evenSum);
}
solve(3495892137259234);
