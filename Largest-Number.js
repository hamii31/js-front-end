function solve(num1, num2, num3){
    var biggest = 0;

    if(num1 > num2 && num1 > num3){
        biggest = num1;
    }
    if(num2 > num1 && num2 > num3){
        biggest = num2;
    }
    if(num3 > num2 && num3 > num1){
        biggest = num3;
    }

    console.log('The largest number is '+ biggest);
}
solve(-3, -5, -22)
