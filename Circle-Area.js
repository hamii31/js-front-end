function solve(value){
    let radius;
    let inputType = typeof(value);

    if(inputType != 'number'){
        console.log("We can not calculate the circle area, because we received a " + inputType + ".")
    }
    else{
        radius = Math.pow(value, 2) * Math.PI;
        console.log(radius.toFixed(2));
    }
}
solve(5)
