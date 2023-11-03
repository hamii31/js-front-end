function solve(n, arr){
    let arr2 = [];

    for(let i = 0; i<n; i++){
        arr2.push(arr[i]);
    }

    let output = "";

    for(let i = arr2.length - 1; i>=0; i--){
        output += arr2[i] + " ";
    }
    
    console.log(output);
}
solve(3, arr = [10, 20, 30, 40, 50]);
