function solve(number){
    var result = "true";
    var sum = 0;

    var string = number.toString().split('');
    var digits = string.map(Number);
    
    for(let i = 0; i <= digits.length - 1; i++){
        if(digits[0] != digits[i]){
            result = "false";
        }
        sum += digits[i];
    }
    
    console.log(result);
    console.log(sum);
}
solve(2222222);
