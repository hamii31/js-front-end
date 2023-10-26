function solve(num1, num2, symbol){
    switch(symbol){
        case "+": console.log(num1 + num2);
        break;
        case "-": console.log(num1 - num2);
        break;
        case "*": console.log(num1 * num2);
        break;
        case "/": console.log(num1 / num2);
        break;
        case "%": console.log(num1 % num2);
        break;
        case "**": console.log(num1 ** num2);
        break;
    }
}

solve(3, 5.5, "*")
