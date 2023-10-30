function solve(n, m){
    var sum = 0;
    var output = n + " ";
    for(let i=n; i<=m; i++){
        if(i != n){
            output += i + " ";
        }
        sum += i;
    }
    console.log(output);
    console.log("Sum: "+ sum);
}
solve(5, 10);
