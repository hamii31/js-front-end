function calc(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;

    let sum = Number(x) + Number(y);

    document.getElementById("sum").value = sum;
}
