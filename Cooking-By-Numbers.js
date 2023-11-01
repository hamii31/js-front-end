function solve(input, op1, op2, op3, op4, op5){
    var num = Number(input);
    var operations = [op1, op2, op3, op4, op5];

    for(let i = 0; i<=operations.length - 1; i++){
        switch(operations[i]){
            case 'chop':
            num /= 2;
            break;
            case 'dice':
            num = Math.sqrt(num);
            break;
            case 'spice':
            num += 1;
            break;
            case 'bake':
            num *= 3;
            break;
            case 'fillet':
            var x = (20/100) * num;
            num -= x;
            break;
        }
        console.log(num);
    }
}
solve(
    '9', 'dice', 'spice', 'chop', 'bake', 'fillet'
);
