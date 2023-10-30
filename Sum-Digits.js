function solve(number){
    var sum = 0;
    var num = number.toString().split('');
    for(let i = 0; i < num.length; i++){
        sum += Number(num[i]);
    }
    console.log(sum);
}
solve(97561);
